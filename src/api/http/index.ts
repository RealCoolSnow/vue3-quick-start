import type { AxiosRequestConfig, ResponseData } from 'axios'
import axios from 'axios'
import { useAppStore } from '@/store/app'

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
      lang: useAppStore().lang,
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

http.interceptors.response.use((response) => {
  if (response.status !== 200)
    return Promise.reject(response.data)

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

export const get: Get = async (url, params, config) =>
  http.get(url, { params, ...config })

export const post: Post = async (url, data, config) =>
  http.post(url, data, config)

export default http
