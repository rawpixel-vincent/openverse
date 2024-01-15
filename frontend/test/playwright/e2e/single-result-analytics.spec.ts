import { expect, Page, test } from "@playwright/test"

import {
  goToSearchTerm,
  openFirstResult,
  preparePageForTests,
  t,
} from "~~/test/playwright/utils/navigation"
import {
  collectAnalyticsEvents,
  expectEventPayloadToMatch,
} from "~~/test/playwright/utils/analytics"

const getBackToSearchLink = (page: Page) => {
  return page.getByRole("link", { name: t("singleResult.back") })
}
test("sends BACK_TO_SEARCH event when clicking on Back to results", async ({
  context,
  page,
}) => {
  const analyticsEvents = collectAnalyticsEvents(context)
  await preparePageForTests(page, "xl")

  await goToSearchTerm(page, "birds")
  await openFirstResult(page, "audio")

  await expect(getBackToSearchLink(page)).toBeVisible()

  const audioId = page.url().split("?")[0].split("/").pop()
  // eslint-disable-next-line playwright/no-conditional-in-test
  if (!audioId) {
    throw new Error("Could not find audioId")
  }
  await getBackToSearchLink(page).click()

  const backToSearchEvents = analyticsEvents.find(
    (event) => event.n === "BACK_TO_SEARCH"
  )

  expectEventPayloadToMatch(backToSearchEvents, {
    id: audioId,
    searchType: "all",
  })
})
