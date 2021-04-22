import axios from 'axios'
import store from '../store'
import { Get, Post } from './type'

const baseURL: string = import.meta.env.VITE_BASE_URL?.toString() || ''

const service = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
})

service.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    lang: store.getters.language,
  }
  return config
}, (error) => {
  Promise.reject(error)
})

service.interceptors.response.use(
  (response) => {
    if (response.status !== 200)
      return Promise.reject(response.data)

    return response.data
  },
)

export const get: Get = async(url, params, config) =>
  service.get(url, { params, ...config })

export const post: Post = async(url, data, config) =>
  service.post(url, data, config)
  
export default service
