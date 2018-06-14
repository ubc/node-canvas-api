import { postRequest, canvasDomain } from './internal/post'

export function createCourse (accountId, body) {
  return postRequest(canvasDomain + `/accounts/${accountId}/courses`, body)
}
