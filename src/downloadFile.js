import fetch from 'node-fetch'
import getFile from './getFile.js'
import fs from 'fs'
import path from 'path'

const token = process.env.CANVAS_API_TOKEN

/**
 * Downloads specified fileID from Canvas to specified path
 * @param {Number} fileId the fileId of the file
 * @param {String} downloadPath the path that the file should be downloaded to
 * @return {Promise} A Promise that resolves to a log that indicates what the filename of the downloaded file is. On error, logs the error
 */

const downloadFile = async (fileId, downloadPath) => {
  try {
    const { url, filename } = await getFile(fileId, downloadPath)
    const modifiedName = filename
      .replace(/%28/g, '(')
      .replace(/%29/g, ')')
      .replace(/%E2%80%93/g, '-')

    const fileStream = fs.createWriteStream(path.join(downloadPath, modifiedName))

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`)
    }

    // Pipe the response body to the file stream
    response.body.pipe(fileStream)

    return new Promise((resolve, reject) => {
      fileStream.on('finish', () => resolve(modifiedName))
      fileStream.on('error', err => reject(err))
    })
  } catch (error) {
    console.error(`Error downloading file: ${error.message}`)
    throw error // Rethrow the error after logging
  }
}

export default downloadFile
