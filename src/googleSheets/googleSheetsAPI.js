let {google} = require('googleapis')
let authentication = require('./authentication')

require('dotenv').config()

const spreadsheetId = process.env.GOOGLE_SHEETS_ID
const sheets = google.sheets('v4')

function getData (auth, range) {
  sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
    auth
  }, (err, result) => {
    if (err) {
      console.log('The API returned an error: ' + err)
      return
    }
    console.log(result)
    return result
  })
}

function writeData (auth, range, data) {
  sheets.spreadsheets.values.batchUpdate({
    auth,
    spreadsheetId,
    resource: {
      valueInputOption: 'RAW',
      data: [
        {
          range: range,
          majorDimension: 'ROWS',
          values: data
        }
      ]
    }
  }, (err, result) => {
    if (err) {
      console.log('The API returned an error: ' + err)
      return
    }
    console.log(result)
    return result
  })
}

module.exports = {
  getData,
  writeData
}
