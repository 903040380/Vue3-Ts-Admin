<template>
  <div class="user">
    <PageSearch
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>
    <PageContent
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
    ></PageContent>
    <PageModal
      pageName="users"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfigComputed"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '../../../../components/page-content/src/page-content.vue'
import { usePageSearch } from '@/hooks/use-page-search'
import { modalConfig } from './config/modal.config'
import PageModal from '../../../../components/page-modal/src/page-modal.vue'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'
export default defineComponent({
  name: 'user',
  setup() {
    const store = useStore()
    const modalConfigComputed = computed(() => {
      //department role dynamically
      const departmentId = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentId!.options = store.state.entireDepartment.map((item) => ({
        title: item.name,
        value: item.id
      }))
      const roleId = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleId!.options = store.state.entireRole.map((item) => ({
        title: item.name,
        value: item.id
      }))
      return modalConfig
    })
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    //password hidden
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    //hook
    const [defaultInfo, pageModalRef, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback)

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfigComputed,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  },
  components: { PageSearch, PageContent, PageModal }
})
</script>

<style scoped></style>
