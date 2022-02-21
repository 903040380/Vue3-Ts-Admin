import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import uniAxios from './service'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
  _id: string
}

uniAxios
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
    // interceptors: {
    //   requestFulfilled: (value) => {
    //     console.log('request success(请求拦截器)')
    //     return value
    //   },
    //   responseFulfilled: (value) => {
    //     console.log('response success(请求拦截器)')
    //     return value
    //   }
    // }
  })
  .then((value) => {
    console.log(value.data)
    console.log(value.success)
  })
