import request from 'request-promise'
import getFile from './getFile'
import fs from 'fs'

require('dotenv').config()

const token = process.env.CANVAS_API_TOKEN

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
})

const downloadFile = (fileId, path) => getFile(fileId, path)
  .then(({ url, filename }) => {
    const pdfStream = fs.createWriteStream(path + filename)
    request(requestObj(url)).pipe(pdfStream)
  })

export default downloadFile
