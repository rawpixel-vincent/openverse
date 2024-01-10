import { expect, Page, test } from "@playwright/test"

import { mockProviderApis } from "~~/test/playwright/utils/route"
import {
  goToSearchTerm,
  preparePageForTests,
  selectHomepageSearchType,
  sleep,
  t,
} from "~~/test/playwright/utils/navigation"

import {
  collectAnalyticsEvents,
  expectEventPayloadToMatch,
} from "~~/test/playwright/utils/analytics"

import {
  ALL_MEDIA,
  AUDIO,
  searchPath,
  supportedSearchTypes,
} from "~/constants/media"

test.describe.configure({ mode: "parallel" })
const searchTypePopover = "[aria-labelledby='search-type-button'] > div"

/* eslint playwright/expect-expect: ["warn", { "additionalAssertFunctionNames": ["popoverIsVisible", "popoverIsNotVisible"] }] */
const popoverIsVisible = async (page: Page) =>
  await expect(page.locator(searchTypePopover)).toBeVisible()
const popoverIsNotVisible = async (page: Page) =>
  await expect(page.locator(searchTypePopover)).toBeHidden()

const clickPopoverButton = async (page: Page) =>
  await page.getByRole("button", { name: t("searchType.all") }).click()

test.beforeEach(async ({ context, page }) => {
  await mockProviderApis(context)
  await preparePageForTests(page, "xl")
})

test.describe("homepage", () => {
  for (const searchType of supportedSearchTypes) {
    test(`can change type and search for ${searchType} from homepage`, async ({
      page,
    }) => {
      await goToSearchTerm(page, "cat", {
        searchType,
        mode: "CSR",
      })

      const expectedUrl = `${searchPath(searchType)}?q=cat`
      await expect(page).toHaveURL(expectedUrl)
    })
  }

  test("can close the search type popover by clicking outside", async ({
    page,
  }) => {
    await page.goto("/")

    await clickPopoverButton(page)
    await popoverIsVisible(page)

    await page.mouse.click(1, 1)
    await popoverIsNotVisible(page)
  })

  test("can close the search type popover by pressing Escape", async ({
    page,
  }) => {
    await page.goto("/")

    // wait for hydration
    await sleep(500)
    await clickPopoverButton(page)
    await popoverIsVisible(page)

    await page.keyboard.press("Escape")

    await popoverIsNotVisible(page)
  })
})

test.describe("analytics", () => {
  test.beforeEach(async ({ context, page }) => {
    await mockProviderApis(context)
    await preparePageForTests(page, "xl")
  })

  test("sends CHANGE_CONTENT_TYPE event when changing search type", async ({
    context,
    page,
  }) => {
    const analyticsEvents = collectAnalyticsEvents(context)

    await page.goto("/")
    await selectHomepageSearchType(page, AUDIO, "ltr")

    const changeContentTypeEvent = analyticsEvents.find(
      (event) => event.n === "CHANGE_CONTENT_TYPE"
    )

    expectEventPayloadToMatch(changeContentTypeEvent, {
      component: "VSearchTypes",
      next: AUDIO,
      previous: ALL_MEDIA,
    })
  })
})
