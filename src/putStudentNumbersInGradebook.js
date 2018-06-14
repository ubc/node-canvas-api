import { getOptions } from './internal/options'
import { getUsersInCourse } from './internal/get'
import { createCustomGradebookColumn } from './internal/post'
import { putStudentNumberInGradeColumn } from './internal/put'

const putStudentNumbersInGradebook = async (courseId, columnTitle, columnPosition = 1) => {
  const customGradeBook = await createCustomGradebookColumn(courseId, columnTitle, columnPosition)
  const customGradeBookId = customGradeBook.id
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const customGradebookResponse = Promise.all(
    studentObjs.map(({ id, sis_user_id }) =>
      putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id }))
  )
  return customGradebookResponse
}

export default putStudentNumbersInGradebook
