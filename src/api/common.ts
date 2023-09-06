import http, { get } from './http'

export function helloGet(params?: any, config?: any) {
  return http.get('hello', { params, ...config })
}

export function helloGet2(params?: any, config?: any) {
  return get<string>('hello', { params, ...config })
}

export function helloPost(params?: any, config?: any) {
  return http.post('hello', params, config)
}
