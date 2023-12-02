// var request = require('request-promise');
const axios = require('axios').default;
var linkparser = require('parse-link-header');

var Bottleneck = require('bottleneck');

// require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;
const client = axios.create();

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
});

async function requestObj(url) {
  try {
    const response = await client.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type':'application/json'
      }
    });
    return response.data;
  } catch(err){
    console.error(err);
  }
}
/*
const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
});
*/

const fetchAll = (url, result = []) => request(requestObj(url)).then(response => {
  result = [...result, ...response.body];
  const links = linkparser(response.headers.link);
  return links.next ? fetchAll(links.next.url, result) : result;
});

const fetchAllRateLimited = limiter.wrap(fetchAll);

module.exports = fetchAllRateLimited;