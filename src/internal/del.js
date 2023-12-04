//var request = require('request-promise');
const axios = require('axios').default;


// require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;
const client = axios.create();

async function deleteRequest(url, body){
  try {
    const response = await client.delete(url,body,  
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
const deleteRequest = (url, body) => request({
  'method': 'DELETE',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err));
*/

module.exports = deleteRequest;