import fetch from './internal/fetch'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * 
 * 
 */

export default function getFile (fileId) {
  return fetch(canvasDomain + `/files/${fileId}`)
}
