const Bottleneck = require('bottleneck')
const { getAllSubaccounts, getAllCourses, getAllStudents, getAllEmailsInCourse } = require('./get.js')
const options = require('./endpoints/options')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

limiter.schedule(() =>
  getAllEmailsInCourse(15, 'APBI', 'APBI415')) // dept, course_code
