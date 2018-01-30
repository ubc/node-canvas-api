const Bottleneck = require('bottleneck')
const { getAllSubaccounts, getAllCourses, getAllStudents, getAllEmailsInCourse } = require('./get.js')
const options = require('./endpoints/options')
const get = require('./endpoints/get')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

limiter.schedule(() => get.getUsersInCourse(3040, options.users.include.email).then(x => console.log(x))
)
