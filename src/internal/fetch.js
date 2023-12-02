// var request = require('request-promise');
const axios = require('axios').default;

var Bottleneck = require('bottleneck');

// require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
});

const client = axios.create();

/**
 * 
 * @param {URL to get} url 
 * @return {Array} ? Not for sure this is what gets returned
 */
async function requestObj(url) {
  try {
    const response = await client.get(url, 
      {
      headers: {
        'Authorization': `Bearer ${token}, 
        'Content-Type':'application/json'`
      },
    });
    return response.data;

  } catch (err) {
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

/*
const fetch = url => request(requestObj(url)).then(response => response.body);
*/

const fetchRateLimited = limiter.wrap(requestObj);

module.exports = fetchRateLimited;