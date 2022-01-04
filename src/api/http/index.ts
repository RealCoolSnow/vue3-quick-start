// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosRequestConfig, ResponseData } from 'axios'
import axios from 'axios'
import store from '../../store'

const baseURL: string = import.meta.env.VITE_BASE_URL?.toString() || ''

const http = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
})

http.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      lang: store.getters.language,
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

http.interceptors.response.use((response) => {
  if (response.status !== 200) return Promise.reject(response.data)

  return response.data
})
/** get & post */
interface Get {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<
  ResponseData<T>
  >
}

interface Post {
  <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<
  ResponseData<T>
  >
}

export const get: Get = async(url, params, config) =>
  http.get(url, { params, ...config })

export const post: Post = async(url, data, config) =>
  http.post(url, data, config)

export default http
