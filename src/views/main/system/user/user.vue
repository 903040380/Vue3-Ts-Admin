<template>
  <div class="user">
    <PageSearch
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '../../../../components/page-content/src/page-content.vue'
import { usePageSearch } from '@/hooks/use-page-search'
export default defineComponent({
  name: 'user',
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  },
  components: { PageSearch, PageContent }
})
</script>

<style scoped></style>
