import uniAxios from '@/service'
import { IDataType } from './type'

export function getPageListData(url: string, queryInfo: any) {
  return uniAxios.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
export function deletePageData(url: string) {
  return uniAxios.delete<IDataType>({
    url: url
  })
}
export function createPageData(url: string, newData: any) {
  return uniAxios.post<IDataType>({
    url: url,
    data: newData
  })
}
export function editPageData(url: string, editData: any) {
  return uniAxios.patch<IDataType>({
    url: url,
    data: editData
  })
}
