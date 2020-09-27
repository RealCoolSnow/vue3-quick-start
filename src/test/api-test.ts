import { helloGet, helloPost } from '../service/api'

export const useHttpTest = () => {
  helloGet().then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
  helloPost().then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
}
