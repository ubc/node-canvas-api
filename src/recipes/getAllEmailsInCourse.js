const { get, getOptions } = require('../util')

const getDeptId = async (accountId, deptName) => {
  const subAccounts = await get.getSubaccounts(accountId)
  const depts = await subAccounts.map(({ id, name }) => ({ id, name }))
  const dept = await depts.find(dept => dept.name === deptName)
  return dept.id
}

const getCourseId = async (accountId, deptName, courseCode) => {
  const deptId = await getDeptId(accountId, deptName)
  const courses = await get.getCourses(deptId)
  const course = await courses.find(course => course.course_code === courseCode)
  return course.id
}

const getStudentObjsFromCourseId = async courseId => {
  const students = await get.getUsersInCourse(courseId, getOptions.users.include.email)
  return students
}

const getAllNamesFromCourseId = async (accountId, deptName, courseCode) => {
  const courseId = await getCourseId(accountId, deptName, courseCode)
  const students = await getStudentObjsFromCourseId(courseId)
  return students.map(student => student.name)
}

const getAllEmailsInCourse = async (accountId, deptName, courseCode) => {
  const courseId = await getCourseId(accountId, deptName, courseCode)
  const students = await getStudentObjsFromCourseId(courseId)
  return students.map(student => student.email)
}

module.exports = {
  getAllEmailsInCourse,
  getAllNamesFromCourseId
}
