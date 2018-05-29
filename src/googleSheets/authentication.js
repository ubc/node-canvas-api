const fs = require('fs')
const readline = require('readline')
const {google} = require('googleapis')
const coursesInTerm = require('./initiateCourseCopy')

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const TOKEN_PATH = 'credentials.json'

// Load client secrets from a local file.
const editFile = (clientSecret, runAction, data) => {
  fs.readFile(clientSecret, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err)
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content), runAction, data)
  })
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize (credentials, callback, data) {
  const {client_secret, client_id, redirect_uris} = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0])

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback)
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client, data)
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken (oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

function initialize (auth, data) {
  const sheets = google.sheets({version: 'v4', auth})
  sheets.spreadsheets.values.batchUpdate({
    auth,
    spreadsheetId: '1PyTUob8HNSsjr0_SWRbPBTSdFeY5kjCE5yxmgcQMljI',
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

module.exports = {
  authorize,
  editFile,
  initialize
}
