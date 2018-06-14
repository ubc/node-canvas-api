import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getAssignments (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/assignments?` + buildOptions(options))
}
