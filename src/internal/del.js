import nodeFetch from 'node-fetch'

const token = process.env.CANVAS_API_TOKEN

const deleteRequest = (url, body) => nodeFetch(url, {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json' // Specify content type for JSON
  },
  body: JSON.stringify(body) // Serialize body to JSON
})
  .then(response => response.ok ? response.json() : Promise.reject(response))
  .catch(err => console.error('Request failed:', err))

export default deleteRequest
