import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves a single rubric
 * @param {Number} rubricId the rubric id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Rubric object: https://canvas.instructure.com/doc/api/rubrics.html
 */

export default function getRubric (rubricId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/rubrics/${rubricId}?` + buildOptions(options))
}
