var request = require('request-promise');

require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;

const putRequest = (url, body) => request({
  'method': 'PUT',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response);

module.exports = putRequest;