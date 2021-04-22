import * as axios from 'axios'

declare module 'axios' {
  export interface ResponseData<T> {
    code: number
    msg?: string
    data?: T
  }
}
