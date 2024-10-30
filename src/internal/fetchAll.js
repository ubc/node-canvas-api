import nodeFetch from 'node-fetch'
import linkparser from 'parse-link-header'
import Bottleneck from 'bottleneck'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.CANVAS_API_TOKEN

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
})

const requestObj = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + token
  }
}

const fetchAll = async (url, result = []) => {
  const response = await nodeFetch(url, requestObj)
  const data = await response.json()
  result = [...result, ...data]

  const links = linkparser(response.headers.get('link'))
  return links?.next ? fetchAll(links.next.url, result) : result
}

const fetchAllRateLimited = limiter.wrap(fetchAll)

export default fetchAllRateLimited
