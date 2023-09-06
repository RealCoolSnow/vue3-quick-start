import { helloGet2, helloPost } from '../api/common'

export function useHttpTest() {
  helloGet2()
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })
  helloPost()
    .then((res) => {
      console.log(res)
      // alert(JSON.stringify(res))
    })
    .catch((e) => {
      console.log(e)
    })
}
