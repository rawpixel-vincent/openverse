import { test, expect, Page } from "@playwright/test"

import { mockProviderApis } from "~~/test/playwright/utils/route"
import {
  collectAnalyticsEvents,
  expectEventPayloadToMatch,
} from "~~/test/playwright/utils/analytics"
import { preparePageForTests, sleep } from "~~/test/playwright/utils/navigation"

const audioObject = {
  id: "1cb1af19-7232-40c2-b9ea-8d6c47e677f9",
  provider: "wikimedia_audio",
}
const goToCustomAudioPage = async (page: Page) => {
  // Test in a custom audio detail page, it should apply the same for any audio.
  await page.goto(`audio/${audioObject.id}`)
  await expect(getMainPlayButton(page)).toBeEnabled()
}

const errorPageHeading = (page: Page) =>
  page.getByRole("heading", {
    level: 1,
    name: /The content you’re looking for seems to have disappeared/,
  })
const getMainPlayButton = (page: Page) =>
  page.getByRole("button", { name: "Play" }).first()

test.describe.configure({ mode: "parallel" })

test.beforeEach(async ({ context }) => {
  await mockProviderApis(context)
})

test("shows the data that is only available in single result, not search response", async ({
  page,
}) => {
  await goToCustomAudioPage(page)
  // Sample rate
  await expect(page.locator('dd:has-text("44100")')).toBeVisible()
})

test.describe("analytics", () => {
  test.beforeEach(async ({ page }) => {
    await preparePageForTests(page, "xl")
  })
  test("sends GET_MEDIA event on CTA button click", async ({
    context,
    page,
  }) => {
    const analyticsEvents = collectAnalyticsEvents(context)

    await goToCustomAudioPage(page)

    const pagePromise = context.waitForEvent("page")
    await page.getByRole("link", { name: /get this audio/i }).click()

    const newPage = await pagePromise
    newPage.close()

    const getMediaEvent = analyticsEvents.find(
      (event) => event.n === "GET_MEDIA"
    )

    expectEventPayloadToMatch(getMediaEvent, {
      ...audioObject,
      mediaType: "audio",
    })
  })

  test("sends AUDIO_INTERACTION event on play", async ({ page, context }) => {
    const analyticsEvents = collectAnalyticsEvents(context)

    await goToCustomAudioPage(page)
    await sleep(1000)

    await getMainPlayButton(page).click()

    const audioInteractionEvent = analyticsEvents.find(
      (event) => event.n === "AUDIO_INTERACTION"
    )

    expectEventPayloadToMatch(audioInteractionEvent, {
      ...audioObject,
      event: "play",
      component: "AudioDetailPage",
    })
  })

  test("sends AUDIO_INTERACTION event on seek", async ({ page, context }) => {
    const analyticsEvents = collectAnalyticsEvents(context)

    await goToCustomAudioPage(page)

    await page.mouse.click(200, 200)

    const audioInteractionEvent = analyticsEvents.find(
      (event) => event.n === "AUDIO_INTERACTION"
    )

    expectEventPayloadToMatch(audioInteractionEvent, {
      ...audioObject,
      event: "seek",
      component: "AudioDetailPage",
    })
  })
})

test("shows the 404 error page when no valid id", async ({ page }) => {
  await page.goto("audio/foo")
  await expect(errorPageHeading(page)).toBeVisible()
})

test("shows the 404 error page when no id", async ({ page }) => {
  await page.goto("audio/")
  await expect(errorPageHeading(page)).toBeVisible()
})
