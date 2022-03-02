import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // console.log(
  //   permissions.find((item) => {
  //     item === verifyPermission
  //     console.log('item', item)
  //     console.log('veri', verifyPermission)
  //   })
  // )
  // return !!permissions.find((item) => {
  //   item === verifyPermission
  // })
  for (const item of permissions) {
    if (item === verifyPermission) return true
  }
  return false
}
