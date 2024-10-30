import fetch from './internal/fetch.js'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Get file object by fileId
 * @param {Number} fileId the file id.
 * @return {Promise} A promise that resolves to a File object: https://canvas.instructure.com/doc/api/files.html#File
 */

export default function getFile (fileId) {
  return fetch(canvasDomain + `/files/${fileId}`)
}
