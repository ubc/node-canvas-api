const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const post = require('./src/requests/post')
const get = require('./src/requests/get')
const del = require('./src/requests/del')
const put = require('./src/requests/put')
const options = require('./src/options')

module.exports = {
  recipes,
  requests,
  get,
  put,
  options,
  post,
  del
}
