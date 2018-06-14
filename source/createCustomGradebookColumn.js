import postRequest from './internal/post'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function createCustomGradebookColumn (courseId, columnTitle, columnPosition) {
  return postRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns`, {
    'column[title]': columnTitle,
    'column[position]': columnPosition
  })
}
