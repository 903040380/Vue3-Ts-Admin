import uniAxios from '@/service'
import { IDataType } from './type'

export function getPageListData(url: string, queryInfo: any) {
  return uniAxios.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
