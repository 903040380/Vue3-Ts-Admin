<template>
  <div class="menu">
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: '_menu',
  setup() {
    return { contentTableConfig }
  },
  components: { PageContent }
})
</script>

<style scoped></style>
