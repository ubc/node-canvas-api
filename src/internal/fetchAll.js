var request = require('request-promise');

var linkparser = require('parse-link-header');

var Bottleneck = require('bottleneck');

require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
});

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
});

const fetchAll = (url, result = []) => request(requestObj(url)).then(response => {
  result = [...result, ...response.body];
  const links = linkparser(response.headers.link);
  return links.next ? fetchAll(links.next.url, result) : result;
}).catch(err => console.log(err));

const fetchAllRateLimited = limiter.wrap(fetchAll);

module.exports = fetchAllRateLimited;