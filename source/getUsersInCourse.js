import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getUsersInCourse (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))
}
