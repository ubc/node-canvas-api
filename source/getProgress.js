import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all assignments in a course
 * @param {Number} id get the progress of id
 * @return {Promise} A promise that resolves to a Progress object: https://canvas.instructure.com/doc/api/progress.html
 */

export default function getProgress (id) {
  return fetchAll(canvasDomain + `/progress/${id}`)
}
