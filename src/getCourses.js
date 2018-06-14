import { fetchAll, canvasDomain } from './internal/get'
import buildOptions from './internal/util'

export default function getCourses (deptId, ...options) {
  return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options))
}
