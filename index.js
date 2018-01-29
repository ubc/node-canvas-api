const Bottleneck = require('bottleneck')
const { getAllSubaccounts, getAllCourses, getAllStudents, getAllEmailsInCourse } = require('./get.js')

require('dotenv').config()
const accountId = process.env.ACCOUNT_ID

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

limiter.schedule(() =>
  getAllEmailsInCourse(accountId, 'APBI', 'APBI265'))
