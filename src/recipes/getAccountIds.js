const { getAccounts } = require('../requests/get')

const getAccountIds = async () => {
  const accounts = await getAccounts()
  const ids = accounts.map(({ id }) => id)
  return ids
}

module.exports = getAccountIds
