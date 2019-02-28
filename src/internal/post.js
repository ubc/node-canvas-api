var request = require('request-promise');

require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;

const postRequest = (url, body) => request({
  'method': 'POST',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err));

module.exports = postRequest;