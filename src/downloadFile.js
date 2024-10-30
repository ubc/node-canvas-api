import request from 'request-promise'
import getFile from './getFile.js'
import fs from 'fs.js'

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

/**
 * Downloads specified fileID from Canvas to specified path
 * @param {Number} fileId the fileId of the file
 * @param {String} path the path that the file should be downloaded to
 * @return {Promise} A Promise that resolves to a log that inidicated what the filename of the downloaded file is. On error, logs the error
 */

const downloadFile = (fileId, path) =>
  getFile(fileId, path)
    .then(({ url, filename }) => {
      const modifiedName = filename.replace(/%28/g, '(').replace(/%29/g, ')').replace(/%E2%80%93/g, '-')
      const pdfStream = fs.createWriteStream(path + modifiedName)
      request(requestObj(url)).pipe(pdfStream)
      return new Promise((resolve, reject) => {
        pdfStream.on('finish', () => resolve(modifiedName))
        pdfStream.on('error', err => reject(err))
      })
    })

export default downloadFile
