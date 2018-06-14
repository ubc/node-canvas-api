import { getOptions } from '../options'
import { getUsersInCourse } from '../requests/get'
import { createCustomGradebookColumn } from '../requests/post'
import { putStudentNumberInGradeColumn } from '../requests/put'

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
