import { postRequest, canvasDomain } from './internal/post'

export default function createCourse (accountId, body) {
  return postRequest(canvasDomain + `/accounts/${accountId}/courses`, body)
}
