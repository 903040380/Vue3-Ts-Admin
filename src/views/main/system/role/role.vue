<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      pageName="role"
      :contentTableConfig="contentTableConfig"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search/src/page-search.vue'
export default defineComponent({
  name: 'role',
  setup() {
    return { contentTableConfig, searchFormConfig }
  },
  components: { PageContent, PageSearch }
})
</script>

<style scoped></style>
