<template>
  <div class="nav-header">
    <component
      class="fold-menu"
      style="width: 2em; height: 2em; margin-right: 8px"
      :is="isFold"
      @click="handleFoldClick"
    ></component>
    <div class="content">
      <div>
        <CommonBreadcrumb :breadcrumbs="breadcrumbs"></CommonBreadcrumb>
      </div>
      <div><UserInfo></UserInfo></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import CommonBreadcrumb from '@/common/common-breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    let isFold = ref('Fold')
    const handleFoldClick = () => {
      isFold.value === 'Fold'
        ? (isFold.value = 'Expand')
        : (isFold.value = 'Fold')
      console.log('foldclick', isFold.value)
      emit('foldChange', isFold.value)
    }

    const store = useStore()
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus

      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return { isFold, handleFoldClick, breadcrumbs }
  },
  components: { UserInfo, CommonBreadcrumb }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  margin-top: 6px;
  .fold-menu {
    cursor: pointer;
  }
  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    div {
      cursor: pointer;
    }
  }
}
</style>
