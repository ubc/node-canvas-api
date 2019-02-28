var request = require('request-promise');

require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;

const deleteRequest = (url, body) => request({
  'method': 'DELETE',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err));

module.exports = deleteRequest;