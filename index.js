const Bottleneck = require('bottleneck')
const options = require('./src/options')
const get = require('./src/get')

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100,
  Promise: Promise
})

limiter.schedule(() => get.getUsersInCourse(3040, options.users.include.email)
  .then(x => console.log(x))
)
