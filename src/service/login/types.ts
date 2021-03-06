export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IUserInfoResult {
  code: number
  data: any
}
export interface IUserMenusResult {
  code: number
  data: any
}
