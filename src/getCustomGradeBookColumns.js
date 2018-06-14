import { fetchAll } from './internal/get'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export function getCustomGradeBookColumns (courseId) { return fetchAll(canvasDomain + `/courses/${courseId}/custom_gradebook_columns?include_hidden=true`) }
