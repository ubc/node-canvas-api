import request from 'request-promise'
import linkparser from 'parse-link-header'

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

const fetchAll = (url, result = []) =>
  request(requestObj(url))
    .then(response => {
      result = [...result, ...response.body]
      const links = linkparser(response.headers.link)
      return links.next ? fetchAll(links.next.url, result) : result
    }).catch(err => console.log(err))

export default fetchAll
