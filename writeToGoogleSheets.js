const authentication = require('./src/googleSheets/authentication')
const { getData, writeData } = require('./src/googleSheets/googleSheetsAPI')

authentication.authenticate().then(auth => {
  writeData(auth, 'A1:C1', [['A', 'B', 'C']])
})
