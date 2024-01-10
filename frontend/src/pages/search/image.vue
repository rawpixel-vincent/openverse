<template>
  <VImageGrid
    :results="results"
    :fetch-state="fetchState"
    kind="search"
    :image-grid-label="$t('browsePage.aria.results', { query: searchTerm })"
  />
</template>

<script lang="ts">
import { defineNuxtComponent } from "#imports"

import type { ImageDetail } from "~/types/media"
import type { FetchState } from "~/types/fetch-state"

import VImageGrid from "~/components/VSearchResultsGrid/VImageGrid.vue"

import type { PropType } from "vue"

export default defineNuxtComponent({
  name: "ImageSearch",
  components: { VImageGrid },
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
    results: {
      type: Array as PropType<ImageDetail[]>,
      default: () => [],
    },
    fetchState: {
      type: Object as PropType<FetchState>,
      required: true,
    },
  },
})
</script>
