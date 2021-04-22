import { AxiosRequestConfig, ResponseData } from 'axios'

export interface Get {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<
  ResponseData<T>
  >
}

export interface Post {
  <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<
  ResponseData<T>
  >
}
