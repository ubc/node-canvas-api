const { getSubaccounts } = require('../requests/get')

const getDeptIds = async accountId => {
  const accounts = await getSubaccounts(accountId)
  const deptIds = accounts.map(({ id, name }) => ({ id, name }))
  return deptIds
}

module.exports = getDeptIds
