import { getOptions } from './internal/options'
import getUsersInCourse from './getUsersInCourse'
import putStudentNumberInGradeColumn from './putStudentNumberInGradeColumn'

const putStudentNumberInExistingCustomColumn = async (courseId, customGradeBookId) => {
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const customGradebookResponse = Promise.all(
    studentObjs.map(({ id, sis_user_id }) =>
      putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id }))
  )
  return customGradebookResponse
}

export default putStudentNumberInExistingCustomColumn
