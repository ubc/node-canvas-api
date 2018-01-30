const request = require('request-promise')
const linkparser = require('parse-link-header')

require('dotenv').config()

const token = process.env.CANVAS_API_TOKEN

const fetchAll = (url, result = []) =>
  request({
    'method': 'GET',
    'uri': url,
    'json': true,
    'resolveWithFullResponse': true,
    'headers': {
      'Authorization': 'Bearer ' + token
    }
  }).then(response => {
    result = [...result, ...response.body]
    const links = linkparser(response.headers.link)
    return links.next ? fetchAll(links.next.url, result) : result
  })

const buildOptions = options => {
  if (options) return options.join('&')
  else return ''
}

module.exports.buildOptions = buildOptions
module.exports.fetchAll = fetchAll
