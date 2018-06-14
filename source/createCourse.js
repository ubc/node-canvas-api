import postRequest from './internal/post'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function createCourse (accountId, body) {
  return postRequest(canvasDomain + `/accounts/${accountId}/courses`, body)
}
