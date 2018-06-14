import { getAccounts } from './internal/get'

const getAccountIds = async () => {
  const accounts = await getAccounts()
  const ids = accounts.map(({ id }) => id)
  return ids
}

export default getAccountIds
