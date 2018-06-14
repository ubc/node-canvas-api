import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getCourses (deptId, ...options) {
  return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options))
}
