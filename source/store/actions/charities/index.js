import prismic from 'prismic.io'

export const fetchCharities = (dispatch) => () => {
  dispatch({
    type: 'FETCH_CHARITIES'
  })
  return prismic.api('https://ifgirlsrantheworld.cdn.prismic.io/api').then((api) => (
    api.query('[[:d = at(document.type, "charity")]]')
  )).then((response) => (
    response.results
  )).then((json) => {
    receiveCharitiesSuccess(dispatch)(json)
  }).catch((err) => {
    receiveCharitiesFailure(dispatch)(err)
    return Promise.reject(err)
  })
}

export const receiveCharitiesFailure = (dispatch) => (error) => {
  dispatch({
    type: 'RECEIVE_CHARITIES_FAILURE',
    payload: { error }
  })
}

export const receiveCharitiesSuccess = (dispatch) => (charities) => {
  dispatch({
    type: 'RECEIVE_CHARITIES_SUCCESS',
    payload: { data: charities }
  })
}
