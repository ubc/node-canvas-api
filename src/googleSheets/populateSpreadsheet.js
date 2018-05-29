let { google } = require('googleapis')
let authentication = require('./authentication')
let sheets = google.sheets('v4')
const { coursesInTerm, copyCourseNames, eraseAll } = require('./initiateCourseCopy')

require('dotenv').config()

const spreadsheetId = process.env.GOOGLE_SHEETS_ID

function initialize (auth, data) {
  const sheets = google.sheets({version: 'v4', auth})
  sheets.spreadsheets.values.batchUpdate({
    auth,
    spreadsheetId: spreadsheetId,
    resource: {
      valueInputOption: 'RAW',
      data: [
        {
          range: 'A1:G1',
          majorDimension: 'ROWS',
          values: [data]
        }
      ]
    }
  }, (err, result) => {
    if (err) {
      console.log('The API returned an error: ' + err)
      return
    }
    console.log('Correctly Initialized, please check at https://docs.google.com/spreadsheets/d/1PyTUob8HNSsjr0_SWRbPBTSdFeY5kjCE5yxmgcQMljI/edit#gid=0')
    return result
  })
}

module.exports = initialize
