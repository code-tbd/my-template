import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // console.log(config)
  },
  (err: Error) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // console.log(res)
  },
  (err: Error) => {
    return Promise.reject(err)
  }
)
