const { getOptions } = require('../options')
const { getUsersInCourse } = require('../requests/get')
const { putStudentNumberInGradeColumn } = require('../requests/put')

const putStudentNumbersInExistingGradebook = async (courseId, customGradeBookId) => {
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const customGradebookResponse = Promise.all(
    studentObjs.map(({ id, sis_user_id }) =>
      putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id }))
  )
  return customGradebookResponse
}

module.exports = putStudentNumbersInExistingGradebook
