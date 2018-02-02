const Bottleneck = require('bottleneck')
const { getAllEmailsInCourse, getAllNamesFromCourseId } = require('./src/recipes/getAllEmailsInCourse')
const { post } = require('./src/util')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

limiter.schedule(() => post.createCourse(15, {
  'course[name]': 'ABCTest',
  'course[course_code]': 'ABC101'
}))
