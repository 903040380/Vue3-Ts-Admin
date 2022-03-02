import uniAxios from '..'
import { IDataType } from '../main/system/type'
import {
  IAccount,
  ILoginResult,
  IUserInfoResult,
  IUserMenusResult
} from './types'

enum LoginAPI {
  AccountLogin = '/login',
  AccountUserInfo = '/users/',
  AccountMenu = '/role/'
}
function accountLoginRequest(account: IAccount) {
  return uniAxios.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
function requestUserInfoById(id: number) {
  return uniAxios.get<IUserInfoResult>({
    url: LoginAPI.AccountUserInfo + id,
    showLoading: false
  })
}
function requestUserMenusByRoleId(id: number) {
  return uniAxios.get<IUserMenusResult>({
    url: LoginAPI.AccountMenu + id + '/menu',
    showLoading: false
  })
}

export { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId }
