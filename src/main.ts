import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/css/index.less'
import * as Icons from '@element-plus/icons-vue'
import store, { setupStore } from './store'
import uniAxios from './service'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

setupStore()

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
//   _id: string
// }

// uniAxios
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: false,
//     interceptors: {
//       requestFulfilled: (value) => {
//         console.log('request success(请求拦截器)')
//         return value
//       },
//       responseFulfilled: (value) => {
//         console.log('response success(请求拦截器)')
//         return value
//       }
//     }
//   })
//   .then((value) => {
//     console.log(value.data)
//   })
