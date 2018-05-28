let { google } = require('googleapis')
let authentication = require('./authentication')
let sheets = google.sheets('v4')
const getAllCoursesInTerm = require('../recipes/getAllCoursesInTerm')

require('dotenv').config()

const spreadsheetId = process.env.GOOGLE_SHEETS_ID

const coursesInTerm = (accountID, year, term) => getAllCoursesInTerm(accountID, year, term)
  .then(courses => getCourseName(courses))

const getCourseName = courses =>
  courses.map(courses => courses.name)

module.exports =
  coursesInTerm
