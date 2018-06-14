import { fetchAll, canvasDomain } from './internal/get'

export function getProgress (id) {
  return fetchAll(canvasDomain + `/progress/${id}`)
}
