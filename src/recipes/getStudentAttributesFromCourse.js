const get = require('../requests/get')
const { getOptions } = require('../requests/options')

const getStudentNamesFromCourse = async courseId => {
  const studentObjs = await get.getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const studentNames = await studentObjs.map(student => student.name)
  return studentNames
}

const getStudentEmailsFromCourse = async courseId => {
  const studentObjs = await get.getUsersInCourse(courseId, getOptions.users.enrollmentType.student, getOptions.users.include.email)
  const studentEmails = await studentObjs.map(student => student.email)
  return studentEmails
}

const getStudentNumbersFromCourse = async courseId => {
  const studentObjs = await get.getUsersInCourse(courseId, getOptions.users.enrollmentType.student)
  const studentNumbers = await studentObjs.map(student => student.sis_user_id)
  return studentNumbers
}

const getStudentNamesAndEmailsFromCourse = async courseId => {
  const studentObjs = await get.getUsersInCourse(courseId, getOptions.users.enrollmentType.student, getOptions.users.include.email)
  const studentNamesAndEmails = await studentObjs.map(({ id, email }) => ({ id, email }))
  return studentNamesAndEmails
}

const getStudentNumbersAndEmailsFromCourse = async courseId => {
  const studentObjs = await get.getUsersInCourse(courseId, getOptions.users.enrollmentType.student, getOptions.users.include.email)
  const studentNumbersAndEmails = await studentObjs.map(({ sis_user_id, email }) => ({ sis_user_id, email }))
  return studentNumbersAndEmails
}

module.exports = {
  getStudentNamesFromCourse,
  getStudentEmailsFromCourse,
  getStudentNumbersFromCourse,
  getStudentNamesAndEmailsFromCourse,
  getStudentNumbersAndEmailsFromCourse
}
