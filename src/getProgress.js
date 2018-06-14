import { fetchAll, canvasDomain } from './internal/get'

export default function getProgress (id) {
  return fetchAll(canvasDomain + `/progress/${id}`)
}
