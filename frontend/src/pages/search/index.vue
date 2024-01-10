<template>
  <VAllResultsGrid
    :results="results"
    :fetch-state="fetchState"
    :search-term="searchTerm"
  />
</template>

<script lang="ts">
import { defineNuxtComponent } from "#imports"

import type { FetchState } from "~/types/fetch-state"

import { AudioDetail, ImageDetail } from "~/types/media"

import VAllResultsGrid from "~/components/VSearchResultsGrid/VAllResultsGrid.vue"

import type { PropType } from "vue"

export default defineNuxtComponent({
  name: "SearchIndex",
  components: { VAllResultsGrid },
  props: {
    results: {
      type: Array as PropType<(ImageDetail | AudioDetail)[]>,
      default: () => [],
    },
    fetchState: {
      type: Object as PropType<FetchState>,
      required: true,
    },
    searchTerm: {
      type: String,
      required: true,
    },
  },
})
</script>
