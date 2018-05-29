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

const copyCourseNames = (auth, data) => {
  const sheets = google.sheets({ version: 'v4', auth })
  sheets.spreadsheets.values.batchUpdate({
    auth,
    spreadsheetId: spreadsheetId,
    resource: {
      valueInputOption: 'RAW',
      data: [
        {
          range: 'A2',
          majorDimension: 'COLUMNS',
          values: [data]
        }
      ]
    }
  }, (err, result) => {
    if (err) {
      console.log('The API returned an error: ' + err)
      return
    }
    console.log('Courses copied, please check at https://docs.google.com/spreadsheets/d/1PyTUob8HNSsjr0_SWRbPBTSdFeY5kjCE5yxmgcQMljI/edit#gid=0')
    return result
  })
}

const eraseAll = (auth, data) => {
  const sheets = google.sheets({ version: 'v4', auth })
  sheets.spreadsheets.values.clear({
    auth,
    spreadsheetId: spreadsheetId,
    range: data
  }, (err, result) => {
    if (err) {
      console.error(err)
    }
    console.log('Sheet erased, please check at https://docs.google.com/spreadsheets/d/1PyTUob8HNSsjr0_SWRbPBTSdFeY5kjCE5yxmgcQMljI/edit#gid=0')
    return result
  })
}

module.exports = {
  coursesInTerm,
  copyCourseNames,
  eraseAll
}
