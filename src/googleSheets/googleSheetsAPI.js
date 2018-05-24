let {google} = require('googleapis')
let authentication = require('./authentication')

require('dotenv').config()

const spreadsheetId = process.env.GOOGLE_SHEETS_ID

function getData (auth, range) {
  const sheets = google.sheets('v4')
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
  // 
}

module.exports = {
  getData,
  writeData
}
