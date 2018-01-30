const Promise = require('bluebird')
const { buildOptions, fetchAll } = require('./util')
const R = require('ramda')

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

const getAllSubaccounts = accountId =>
  fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`)

const getAllCourses = (deptIds, ...options) =>
  Promise.all(deptIds.map(deptId =>
    fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options))))

const getAllStudents = (courseIds, ...options) =>
  Promise.all(courseIds.map(courseId =>
    fetchAll(canvasDomain + `/courses/${courseId}/users?` + buildOptions(options))))

const getAllEmailsInCourse = (accountId, deptName, courseCode) =>
  getAllSubaccounts(accountId)
    .then(depts => depts.map(({ id, name }) => ({ id, name })))
    .then(depts => depts.find(dept => dept.name === deptName))
    .then(dept => getAllCourses([dept.id]))
    .then(courses => R.flatten(courses))
    .then(courses => courses.find(course => course.course_code === courseCode))
    .then(course => getAllStudents([course.id], 'include[]=email', 'enrollment_type[]=student'))
    .then(students => R.flatten(students))
    .then(students => console.log(students))

module.exports.getAllSubaccounts = getAllSubaccounts
module.exports.getAllCourses = getAllCourses
module.exports.getAllStudents = getAllStudents
module.exports.getAllEmailsInCourse = getAllEmailsInCourse
