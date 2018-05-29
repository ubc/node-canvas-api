let { google } = require('googleapis')
let authentication = require('./authentication')
let sheets = google.sheets('v4')
const coursesInTerm = require('./initiateCourseCopy')

require('dotenv').config()

const spreadsheetId = process.env.GOOGLE_SHEETS_ID

coursesInTerm(15, 2018, 'W1').then(x => console.log(x))
