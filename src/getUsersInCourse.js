import { fetchAll, canvasDomain } from './internal/get'
import { buildOptions } from './internal/util'

export function getUsersInCourse (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))
}
