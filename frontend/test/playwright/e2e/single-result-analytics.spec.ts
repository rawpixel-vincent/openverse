import { expect, test } from "@playwright/test"

import {
  openFirstResult,
  preparePageForTests,
} from "~~/test/playwright/utils/navigation"
import {
  collectAnalyticsEvents,
  expectEventPayloadToMatch,
} from "~~/test/playwright/utils/analytics"

test.describe("single result analytics", () => {
  test.beforeEach(async ({ page }) => {
    await preparePageForTests(page, "xl")
    await page.goto("/search/?q=birds")
  })

  test("sends BACK_TO_SEARCH event when clicking on Back to results", async ({
    context,
    page,
  }) => {
    const analyticsEvents = collectAnalyticsEvents(context)
    await openFirstResult(page, "audio")

    const backLink = page.locator("text=Back to results")

    await expect(backLink).toBeVisible()
    const audioId = page.url().split("?")[0].split("/").pop()
    // eslint-disable-next-line  playwright/no-conditional-in-test
    if (!audioId) {
      throw new Error("Could not find audioId")
    }

    const backToSearchEvents = analyticsEvents.find(
      (event) => event.n === "BACK_TO_SEARCH"
    )

    expectEventPayloadToMatch(backToSearchEvents, {
      id: audioId,
      searchType: "all",
    })
  })
})
