import getSubaccounts from './getSubaccounts'

/**
 * Retrieves all depts in account
 * @param {Number} accountId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Assignment objects: https://canvas.instructure.com/doc/api/assignments.html#Assignment
 */

const getDeptIdsInAccount = async accountId => {
  const accounts = await getSubaccounts(accountId)
  const deptIds = accounts.map(({ id, name }) => ({ id, name }))
  return deptIds
}

export default getDeptIdsInAccount
