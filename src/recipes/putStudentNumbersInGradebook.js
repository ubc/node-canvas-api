const { getOptions } = require('../requests/options')
const { getUsersInCourse } = require('../requests/get')
const { createCustomGradebookColumn } = require('../requests/post')
const { putStudentNumberInGradeColumn } = require('../requests/put')

const putStudentNumbersInGradebook = async (courseId, columnTitle, columnPosition = 1) => {
  const customGradeBook = await createCustomGradebookColumn(courseId, columnTitle, columnPosition)
  const customGradeBookId = customGradeBook.id
  const studentObjs = await getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const responseCustomGradebook = Promise.all(
    studentObjs.map(({ id, sis_user_id }) =>
      putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id }))
  )
  return responseCustomGradebook
}

module.exports = putStudentNumbersInGradebook
