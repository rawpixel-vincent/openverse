import { test, expect, Page } from "@playwright/test"

import { preparePageForTests, t } from "~~/test/playwright/utils/navigation"

test.describe.configure({ mode: "parallel" })

const getH1 = (page: Page, text: string | RegExp) =>
  page.getByRole("heading", { level: 1, name: text })
const loadMoreButton = (page: Page) =>
  page.getByRole("button", { name: t("browsePage.load") })

test.describe("collections", () => {
  test.beforeEach(async ({ page }) => {
    await preparePageForTests(page, "xl", {
      features: {
        additional_search_views: "on",
      },
    })
    await page.routeFromHAR("./test/hars/collections.har", {
      url: /v1/,
      update: false,
    })
    await page.goto("/image/f9384235-b72e-4f1e-9b05-e1b116262a29?q=cat")
    // Wait for the page to hydrate
    await expect(
      page.getByRole("button", {
        name: t("mediaDetails.reuse.copyLicense.copyText"),
      })
    ).toBeEnabled()
  })

  test("can open tags collection page from image page", async ({ page }) => {
    // Using the href because there are multiple links with the same text.
    await page.click('[href*="/tag/cat"]')

    await page.waitForURL(/image\/tag\/cat/)
    await expect(getH1(page, /cat/i)).toBeVisible()

    await expect(loadMoreButton(page)).toBeEnabled()
    expect(await page.locator("figure").count()).toEqual(20)

    expect(page.url()).toMatch(/image\/tag\/cat/)
  })

  test("can open source collection page from image page", async ({ page }) => {
    const sourcePattern = /flickr/i

    await page.getByRole("link", { name: sourcePattern }).first().click()

    await page.waitForURL(/image\/source\/flickr\//)
    await expect(loadMoreButton(page)).toBeEnabled()
    await expect(getH1(page, sourcePattern)).toBeVisible()
    expect(await page.locator("figure").count()).toEqual(20)
    expect(page.url()).toMatch(/image\/source\/flickr\/$/)
  })

  test("can open creator collection page from image page", async ({ page }) => {
    const creatorPattern = /strogoscope/i
    await page.getByRole("link", { name: creatorPattern }).first().click()

    await page.waitForURL(/image\/source\/flickr\/creator\/strogoscope\//)
    await expect(getH1(page, creatorPattern)).toBeVisible()
    await expect(loadMoreButton(page)).toBeEnabled()
    expect(await page.locator("figure").count()).toEqual(20)
    expect(page.url()).toMatch(/image\/source\/flickr\/creator\/strogoscope\//)
  })
})
