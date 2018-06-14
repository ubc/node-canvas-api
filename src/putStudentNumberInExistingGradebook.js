import { getOptions } from './internal/options'
import { getUsersInCourse } from './internal/get'
import { putStudentNumberInGradeColumn } from './internal/put'

const putStudentNumbersInExistingGradebook = async (courseId, customGradeBookId) => {
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const customGradebookResponse = Promise.all(
    studentObjs.map(({ id, sis_user_id }) =>
      putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id }))
  )
  return customGradebookResponse
}

export default putStudentNumbersInExistingGradebook
