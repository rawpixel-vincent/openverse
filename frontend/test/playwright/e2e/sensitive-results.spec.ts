import { expect, test } from "@playwright/test"

import {
  filters,
  goToSearchTerm,
  preparePageForTests,
  t,
} from "~~/test/playwright/utils/navigation"

test.describe.configure({ mode: "parallel" })

test.describe("sensitive_results", () => {
  test("can set `includeSensitiveResults` filter by toggling the UI", async ({
    page,
  }) => {
    await preparePageForTests(page, "xl", {
      features: { fake_sensitive: "on" },
    })
    await goToSearchTerm(page, "cat", { mode: "CSR" })

    await filters.open(page)

    await page
      .getByLabel(t("filters.safeBrowsing.toggles.fetchSensitive.title"))
      .check()

    await page.getByRole("link", { name: "Openverse Home" }).click()

    await page.locator('main input[type="search"]').fill("cat")
    await page.keyboard.press("Enter")

    await expect(
      page.getByRole("heading", { level: 1, name: /cat/i })
    ).toBeVisible()

    const sensitiveImageLink = page
      .getByRole("link", {
        name: /This image may contain sensitive content/i,
      })
      .first()

    await expect(sensitiveImageLink).toBeVisible()
    await page.context().clearCookies()
  })
})
