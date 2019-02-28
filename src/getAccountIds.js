var getAccounts = require('./getAccounts');

/**
 * Returns all account ids 
 * @return {Promise} A list of account IDs
 */

const getAccountIds = async () => {
  const accounts = await getAccounts();
  const ids = accounts.map(({ id }) => id);
  return ids;
};

module.exports = getAccountIds;