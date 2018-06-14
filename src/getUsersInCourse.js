import { fetchAll, canvasDomain } from './internal/get'
import buildOptions from './internal/util'

export default function getUsersInCourse (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))
}
