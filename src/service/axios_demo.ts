import axios from 'axios'

axios.get('http://152.136.185.210:7878/api/hy66/home/multidata').then((res) => {
  console.log(res.data)
})
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
axios
  .get('/get', {
    params: {
      name: 'hhx'
    },
    timeout: 5000
  })
  .then((res) => {
    console.log(res.data)
  })
axios
  .post('/post', {
    data: {
      name: 'hhx'
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios.interceptors.request.use(
  (config) => {
    //add token
    //add loading anime
    console.log('config')

    return config
  },
  (err) => {
    console.log('err')
    return err
  }
)
axios.interceptors.response.use(
  (response) => {
    console.log('response')
    return response
  },
  (err) => {
    console.log('err')
    return err
  }
)
