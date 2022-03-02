import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/css/index.less'
import * as Icons from '@element-plus/icons-vue'
import store, { setupStore } from './store'
import uniAxios from './service'
import { globalRegister } from './global'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)

app.use(store)
setupStore() //刷新重新保存vuex数据不然vuex没数据，router也没办法动态分配路由

app.use(router) //要在setupStore()重新保存数据后

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

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
app.use(globalRegister)

app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
