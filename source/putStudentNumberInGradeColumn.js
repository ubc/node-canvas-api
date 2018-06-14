import putRequest from './internal/put'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function putStudentNumberInGradeColumn (courseId, gradebookColumnId, studentId, body) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}/data/${studentId}`, body)
}
