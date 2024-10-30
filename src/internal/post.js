import nodeFetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.CANVAS_API_TOKEN

const postRequest = (url, body) => nodeFetch({
  'method': 'POST',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err))

export default postRequest
