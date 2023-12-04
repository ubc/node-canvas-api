// var request = require('request-promise');
const axios = require('axios').default;


const token = process.env.CANVAS_API_TOKEN;
const client = axios.create();


/**
 * 
 * @param {string} url 
 * @param {Object} body
 * @return {string} response 
 */
async function putRequest(url, body){
  try {
    const response = await client.put(url,body,  
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
const putRequest = (url, body) => request({
  'method': 'PUT',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response);
*/

module.exports = putRequest;