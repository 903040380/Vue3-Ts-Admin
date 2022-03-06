<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      pageName="role"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></PageContent>
    <PageModal
      :otherInfo="otherInfo"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
    >
      <div class="el-tree">
        <el-tree
          ref="elTreeRef"
          @check="handleCheckChange"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
        />
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import PageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search/src/page-search.vue'
import PageModal from '@/components/page-modal/src/page-modal.vue'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'
export default defineComponent({
  name: 'role',
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [defaultInfo, pageModalRef, handleNewData, handleEditData] =
      usePageModal(undefined, editCallback)

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      defaultInfo,
      pageModalRef,
      handleNewData,
      handleEditData,
      menus,
      handleCheckChange,
      otherInfo,
      elTreeRef
    }
  },
  components: { PageContent, PageSearch, PageModal }
})
</script>

<style scoped>
.el-tree {
  margin-left: 20px;
}
</style>
