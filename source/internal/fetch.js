import request from 'request-promise'

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

const fetch = url => request(requestObj(url))
  .then(response => response.body)

export default fetch
