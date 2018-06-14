import { putRequest, canvasDomain } from './internal/put'

export default function putStudentNumberInGradeColumn (courseId, gradebookColumnId, studentId, body) {
  return putRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns/${gradebookColumnId}/data/${studentId}`, body)
}
