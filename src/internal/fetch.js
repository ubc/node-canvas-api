import nodeFetch from 'node-fetch'
import Bottleneck from 'bottleneck'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.CANVAS_API_TOKEN

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
})

const fetch = url => nodeFetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response.json())

const fetchRateLimited = limiter.wrap(fetch)

export default fetchRateLimited
