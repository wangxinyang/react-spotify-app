import axios from 'axios'

interface Result {
  code: number
  msg: string
}

// 请求响应参数，包含data
interface ResultData<T> extends Result {
  data?: T
}

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => {
    if (config.method == 'post') {
      config.data = {
        ...config.data,
        _t: Date.parse(new Date() + '') / 1000,
      }
    }
    // const token = localStorage.getItem('token') || ''
    // return {
    //   ...config,
    //   headers: {
    //     'x-access-token': token, // 请求头中携带token信息
    //   },
    // }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

const post = <T>(url: string, data?: object): Promise<ResultData<T>> =>
  instance.post(url, data)

const get = <T>(url: string, params?: object): Promise<ResultData<T>> =>
  instance.get(url, { params })

export { instance, post, get }
