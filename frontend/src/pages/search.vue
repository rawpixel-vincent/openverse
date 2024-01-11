<template>
  <div
    :id="skipToContentTargetId"
    tabindex="-1"
    class="browse-page flex w-full flex-col px-6 lg:px-10"
  >
    <VErrorSection
      v-if="fetchingError"
      :fetching-error="fetchingError"
      class="w-full py-10"
    />
    <section v-else>
      <header v-if="query.q && supported" class="my-0 md:mb-8 md:mt-4">
        <VSearchResultsTitle :size="isAllView ? 'large' : 'default'">{{
          searchTerm
        }}</VSearchResultsTitle>
      </header>
      <NuxtPage
        v-if="isAllView || isSupportedMediaType(searchType)"
        :key="$route.path"
        :results="results ?? []"
        :fetch-state="fetchState"
        :search-term="searchTerm"
        :supported="supported"
        data-testid="search-results"
      />
      <VGridSkeleton
        v-if="pending && (!results || !results.length)"
        :is-for-tab="isSearchTypeSupported(searchType) ? searchType : 'all'"
      />
      <footer :class="isAllView ? 'mb-6 mt-4 lg:mb-10' : 'mt-4'">
        <VLoadMore
          v-if="isSearchTypeSupported(searchType)"
          :search-term="searchTerm"
          :search-type="searchType"
          @load-more="handleLoadMore"
        />
      </footer>
      <VExternalSearchForm
        v-if="!isAllView"
        :search-term="searchTerm"
        :is-supported="supported"
        :has-no-results="false"
      />
      <VScrollButton
        v-show="showScrollButton"
        :is-filter-sidebar-visible="isSidebarVisible"
        data-testid="scroll-button"
      />
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineNuxtComponent,
  definePageMeta,
  isClient,
  isSearchTypeSupported,
  navigateTo,
  showError,
  useAsyncData,
  useHead,
} from "#imports"

import { computed, inject, ref, watch } from "vue"
import { watchDebounced } from "@vueuse/core"
import { storeToRefs } from "pinia"

import { searchMiddleware } from "~/middleware/search"
import { useFeatureFlagStore } from "~/stores/feature-flag"
import { useMediaStore } from "~/stores/media"
import { useSearchStore } from "~/stores/search"
import { ALL_MEDIA, isSupportedMediaType } from "~/constants/media"

import { skipToContentTargetId } from "~/constants/window"
import { IsSidebarVisibleKey, ShowScrollButtonKey } from "~/types/provides"
import { areQueriesEqual } from "~/utils/search-query-transform"
import { handledClientSide } from "~/utils/errors"

import VErrorSection from "~/components/VErrorSection/VErrorSection.vue"
import VScrollButton from "~/components/VScrollButton.vue"
import VExternalSearchForm from "~/components/VExternalSearch/VExternalSearchForm.vue"
import VSearchResultsTitle from "~/components/VSearchResultsTitle.vue"
import VGridSkeleton from "~/components/VSkeleton/VGridSkeleton.vue"

export default defineNuxtComponent({
  name: "BrowsePage",
  methods: { isSearchTypeSupported },
  components: {
    VGridSkeleton,
    VErrorSection,
    VSearchResultsTitle,
    VExternalSearchForm,
    VScrollButton,
  },
  async setup() {
    definePageMeta({
      layout: "search-layout",
      middleware: searchMiddleware,
    })
    const showScrollButton = inject(ShowScrollButtonKey)
    const isSidebarVisible = inject(IsSidebarVisibleKey)
    const featureFlagStore = useFeatureFlagStore()
    const mediaStore = useMediaStore()
    const searchStore = useSearchStore()

    // I don't know *exactly* why this is necessary, but without it
    // transitioning from the homepage to this page breaks the
    // watcher in useStorage and recent searches won't be saved
    // properly. It is something related to Pinia, Nuxt SSR,
    // hydration and Vue reactives. Hopefully fixed in Nuxt 3.
    searchStore.refreshRecentSearches()

    const {
      searchTerm,
      searchType,
      apiSearchQueryParams: query,
      searchTypeIsSupported: supported,
    } = storeToRefs(searchStore)

    const { resultCount, fetchState } = storeToRefs(mediaStore)

    const isAllView = computed(() => searchType.value === ALL_MEDIA)

    const pageTitle = ref(`${searchTerm.value} | Openverse`)
    watch(searchTerm, (newTerm) => {
      pageTitle.value = `${newTerm} | Openverse`
    })

    useHead(() => ({
      title: pageTitle.value,
      meta: [{ key: "robots", name: "robots", content: "all" }],
    }))

    const fetchingError = computed(() => mediaStore.fetchState.fetchingError)
    const scrollToTop = () => {
      document.getElementById("main-page")?.scroll(0, 0)
    }

    /**
     * This watcher fires even when the queries are equal. We update the path only
     * when the queries change.
     */
    watchDebounced(
      query,
      (newQuery, oldQuery) => {
        if (!areQueriesEqual(newQuery, oldQuery)) {
          debouncedQuery.value = newQuery
          page.value = 1
          return navigateTo(searchStore.getSearchPath())
        }
      },
      { debounce: 800, maxWait: 5000 }
    )
    const debouncedQuery = ref(query.value)

    const shouldFetchSensitiveResults = computed(() => {
      return featureFlagStore.isOn("fetch_sensitive")
    })
    watch(shouldFetchSensitiveResults, () => {
      page.value = 1
    })

    const storeResults = computed(() => {
      const st = searchType.value
      return st === ALL_MEDIA
        ? mediaStore.allMedia
        : isSupportedMediaType(st)
        ? mediaStore.resultItems[st]
        : []
    })
    const page = ref(1)

    const handleLoadMore = () => {
      page.value = page.value + 1
    }

    const { error, pending } = await useAsyncData(
      "search",
      async () => {
        const isFirstPageRequest = page.value < 2
        if (isFirstPageRequest && isClient) {
          scrollToTop()
        }

        return await mediaStore.fetchMedia({
          shouldPersistMedia: !isFirstPageRequest,
        })
      },
      {
        watch: [
          shouldFetchSensitiveResults,
          searchTerm,
          searchType,
          page,
          debouncedQuery,
        ],
        immediate: true,
        lazy: isClient ?? false,
        // Minimize the data sent to the client
        transform: (data) => {
          if (data) {
            return data.map((item) => item.id)
          }
        },
      }
    )

    watch(
      error,
      () => {
        if (fetchingError.value && !handledClientSide(fetchingError.value)) {
          return showError({
            ...(fetchingError.value ?? {}),
            fatal: true,
          })
        }
      },
      { immediate: true }
    )

    return {
      showScrollButton,
      searchTerm,
      searchType,
      supported,
      query,
      isSupportedMediaType,

      resultCount,
      fetchState,
      isSidebarVisible,
      fetchingError,
      handleLoadMore,

      isAllView,

      skipToContentTargetId,
      results: storeResults,
      pending,
    }
  },
})
</script>
