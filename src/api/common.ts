import http, { get } from './http'

export const helloGet = (params?: any, config?: any) =>
  http.get('hello', { params, ...config })

export const helloGet2 = (params?: any, config?: any) =>
  get<string>('hello', { params, ...config })

export const helloPost = (params?: any, config?: any) =>
  http.post('hello', params, config)
