const isFetched = ({ status } = {}) => status === 'fetched'
const isFailed = ({ status } = {}) => status === 'failed'

export default ({
  subscribe,
  getState
}, {
  fetcher,
  identifier,
  resourceName
}) => {
  const state = getState()

  return new Promise((resolve, reject) => {
    if (isFetched(state[resourceName][identifier])) {
      return resolve(state[resourceName][identifier])
    }

    const unsubscribe = subscribe(() => {
      const newState = getState()

      if (isFetched(newState[resourceName][identifier])) {
        unsubscribe()
        resolve(newState[resourceName][identifier])
      } else if (isFailed(newState[resourceName][identifier])) {
        unsubscribe()
        reject(new Error(newState[resourceName][identifier].error))
      }
    })

    fetcher(identifier)
  })
}
