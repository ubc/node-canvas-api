var getSubaccounts = require('./getSubaccounts');

/**
 * Retrieves all depts in account
 * @param {Number} accountId the account id.
 * @return {Promise} A promise that resolves to a list of Subaccount objects
 */

const getDeptIdsInAccount = async accountId => {
  const accounts = await getSubaccounts(accountId);
  const deptIds = accounts.map(({ id, name }) => ({ id, name }));
  return deptIds;
};

module.exports = getDeptIdsInAccount;