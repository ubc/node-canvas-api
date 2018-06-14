import { getOptions } from '../options'
import { getUsersInCourse } from '../requests/get'
import { putStudentNumberInGradeColumn } from '../requests/put'

const putStudentNumbersInExistingGradebook = async (courseId, customGradeBookId) => {
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const customGradebookResponse = Promise.all(
    studentObjs.map(({ id, sis_user_id }) =>
      putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id }))
  )
  return customGradebookResponse
}

export default putStudentNumbersInExistingGradebook
