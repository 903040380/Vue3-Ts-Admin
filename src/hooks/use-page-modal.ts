import PageModal from '@/components/page-modal'
import { ref } from 'vue'
type CallbackFn = (item?: any) => void
export function usePageModal(
  newCallback?: CallbackFn,
  editCallback?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData: any = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    newCallback && newCallback()
  }
  const handleEditData: any = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    editCallback && editCallback(item)
  }

  return [defaultInfo, pageModalRef, handleNewData, handleEditData]
}
