//var request = require('request-promise');
const axios = require('axios').default;


// require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;
const client = axios.create();

async function postRequest(url, body){

  try {
    const response = await client.post(url,body,  
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
const postRequest = (url, body) => request({
  'method': 'POST',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err));
*/

module.exports = postRequest;