import fetchAll from './internal/fetchAll'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves progress of asynchronous operation.
 * @param {Number} id get the progress of id.
 * @return {Promise} A promise that resolves to a Progress object: https://canvas.instructure.com/doc/api/progress.html
 */

export default function getProgress (id) {
  return fetchAll(canvasDomain + `/progress/${id}`)
}
