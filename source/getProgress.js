import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getProgress (id) {
  return fetchAll(canvasDomain + `/progress/${id}`)
}
