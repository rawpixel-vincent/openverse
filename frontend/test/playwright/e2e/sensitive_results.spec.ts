import { expect, test } from "@playwright/test"

import {
  filters,
  goToSearchTerm,
  isPageDesktop,
  t,
} from "~~/test/playwright/utils/navigation"

test.describe.configure({ mode: "parallel" })

test.describe("sensitive_results", () => {
  test("can set `includeSensitiveResults` filter by toggling the UI", async ({
    page,
  }) => {
    await page.goto("/preferences")
    // Feature flag labels are not translated
    await page
      .getByLabel(/Mark 50% of results as sensitive to test content safety./i)
      .check()
    await page
      .getByLabel(/Show results marked as sensitive in the results area./i)
      .check()

    await goToSearchTerm(page, "cat", { mode: "CSR" })

    await filters.open(page)

    await page
      .getByLabel(t("filters.safeBrowsing.toggles.fetchSensitive.title"))
      .check()

    const searchButtonLabel = new RegExp(
      t(
        isPageDesktop(page)
          ? "browsePage.searchForm.button"
          : "header.seeResults"
      ),
      "i"
    )
    await page.getByRole("button", { name: searchButtonLabel }).click()

    const sensitiveImageLink = page
      .getByRole("link", {
        name: /This image may contain sensitive content/i,
      })
      .first()

    await expect(sensitiveImageLink).toBeVisible()
  })
})
