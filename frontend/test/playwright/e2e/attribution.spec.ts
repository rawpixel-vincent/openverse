import { test, expect, Page } from "@playwright/test"

import {
  preparePageForTests,
  scrollDownAndUp,
} from "~~/test/playwright/utils/navigation"
import {
  collectAnalyticsEvents,
  expectEventPayloadToMatch,
} from "~~/test/playwright/utils/analytics"

test.describe.configure({ mode: "parallel" })

const formatTitle = { rich: "rich text", html: "HTML", plain: "plain text" }

const copyAttribution = async (
  page: Page,
  formatId: "rich" | "html" | "plain"
) => {
  const formatPattern = new RegExp(formatTitle[formatId], "i")

  const formatTab = page.getByRole("tab", { name: formatPattern })

  await formatTab.click()
  await expect(formatTab).toHaveAttribute("aria-selected", "true")
  await expect(
    page.getByRole("tabpanel", { name: formatPattern })
  ).toBeVisible()

  const copyButton = page.getByRole("button", { name: /copy text/i })
  await expect(copyButton).toHaveAttribute("id", `copyattr-${formatId}`)

  await copyButton.click()

  return await getClippedText(page)
}

const getClippedText = async (page: Page) => {
  return await page.evaluate(async () => await navigator.clipboard.readText())
}

test.describe("attribution", () => {
  test.beforeEach(async ({ context, page }) => {
    await preparePageForTests(page, "xl")
    await context.grantPermissions(["clipboard-read", "clipboard-write"])
    await page.goto("image/e9d97a98-621b-4ec2-bf70-f47a74380452")
    await scrollDownAndUp(page)
  })

  test("can copy rich text attribution", async ({ page }) => {
    const clippedText = await copyAttribution(page, "rich")
    // The Clipboard API returns a plain-text-ified version of the rich text.
    expect(clippedText).toContain('"bubbles in honey" by mutednarayan')
  })

  test("can copy HTML attribution", async ({ page }) => {
    const clippedText = await copyAttribution(page, "html")

    const snippets = [
      '<p class="attribution">',
      ">bubbles in honey</a>",
      ">mutednarayan</a>",
    ]
    snippets.forEach((snippet) => {
      expect(clippedText).toContain(snippet)
    })
  })

  test("can copy plain text attribution", async ({ page }) => {
    const clippedText = await copyAttribution(page, "plain")

    // Only the plain-text license contains the "To view" bit.
    expect(clippedText).toContain("To view a copy of this license")
  })

  test("sends analytics event on copy", async ({ page }) => {
    const analyticsEvents = collectAnalyticsEvents(page.context())

    const format = "rich"
    await copyAttribution(page, format)

    const copyAttributionEvent = analyticsEvents.find(
      (event) => event.n === "COPY_ATTRIBUTION"
    )
    expectEventPayloadToMatch(copyAttributionEvent, {
      id: "e9d97a98-621b-4ec2-bf70-f47a74380452",
      format,
      mediaType: "image",
    })
  })
})
