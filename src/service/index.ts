import UniAxios from './uni-axios'
import { BASE_URL, TIME_OUT } from './uni-axios/config'

const uniAxios = new UniAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestFulfilled: (value) => {
      const token = ''
      if (token) {
        value.headers!.Authorization = `Bearer ${token}`
      }

      console.log('request success(实例拦截器)')
      return value
    },
    requestRejected: (error) => {
      console.log('request failure(实例拦截器)')
      return error
    },
    responseFulfilled: (value) => {
      console.log('response success(实例拦截器)')
      return value
    },
    responseRejected: (error) => {
      console.log('response failure(实例拦截器)')
      return error
    }
  }
})

export default uniAxios
