const { fetchAll } = require('./util')
require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

module.exports = {
  getSubaccounts: accountId => {
    return fetchAll(canvasDomain + `/accounts/${accountId}/sub_accounts?`)
  }
}
