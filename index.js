const Bottleneck = require('bottleneck')
const { getAllSubaccounts, getAllCourses, getAllStudents, getAllEmailsInCourse } = require('./get.js')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

limiter.schedule(() =>
  getAllEmailsInCourse(1, '', '')) // dept, course_code
