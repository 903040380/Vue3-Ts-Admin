import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { UniConfig, UniInterceptors } from './type'

import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'

const DEFAULT_LOADING = true

class UniAxios {
  instance: AxiosInstance
  interceptors?: UniInterceptors
  showLoading: boolean
  loading?: any
  constructor(config: UniConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    //全局拦截器
    this.instance.interceptors.request.use(
      (value) => {
        console.log('request success(全局拦截器)')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }

        return value
      },
      (error) => {
        console.log('request failure(全局拦截器)')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (value) => {
        console.log('request success(全局拦截器)')

        this.loading?.close()

        return value //axios的response对象中的data才是真实数据
      },
      (error) => {
        console.log('request failure(全局拦截器)')

        this.loading?.close()

        return error
      }
    )
    //实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestFulfilled,
      this.interceptors?.requestRejected
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseFulfilled,
      this.interceptors?.responseRejected
    )
  }

  request<T>(config: UniConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      //请求拦截器
      if (config.interceptors?.requestFulfilled) {
        config = config.interceptors.requestFulfilled(config)
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request(config)
        .then((value) => {
          if (config.interceptors?.responseFulfilled) {
            value = config.interceptors.responseFulfilled(value)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(value.data) //axios的response对象中的data才是真实数据
        })
        .catch((error) => {
          this.showLoading = DEFAULT_LOADING
          reject(error)
        })
    })
  }
  get<T>(config: UniConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: UniConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: UniConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: UniConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default UniAxios
