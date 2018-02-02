const { getOptions } = require('../requests/options')
const get = require('../requests/get')
const post = require('../requests/post')
const put = require('../requests/put')

const putStudentNumbersInGradebook = async (courseId, columnTitle, columnPosition) => {
  const customGradeBook = await post.createCustomGradebookColumn(courseId, columnTitle, columnPosition)
  const customGradeBookId = await customGradeBook.id
  const studentObjs = await get.getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const responseCustomGradebook = Promise.all(studentObjs.map(({ id, sis_user_id }) =>
    put.putStudentNumberInGradeColumn(courseId, customGradeBookId, id, { 'column_data[content]': sis_user_id })))
  return responseCustomGradebook
}

module.exports = putStudentNumbersInGradebook
