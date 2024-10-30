import nodeFetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.CANVAS_API_TOKEN

const putRequest = (url, body) => nodeFetch({
  'method': 'PUT',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response)

export default putRequest
