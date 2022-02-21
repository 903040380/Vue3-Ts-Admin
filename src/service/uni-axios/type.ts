import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface UniInterceptors {
  requestFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig
  requestRejected?: (error: any) => any
  responseFulfilled?: (value: AxiosResponse) => AxiosResponse
  responseRejected?: (error: any) => any
}
export interface UniConfig extends AxiosRequestConfig {
  interceptors?: UniInterceptors
  showLoading?: boolean
}
