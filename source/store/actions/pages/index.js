import prismic from 'prismic.io'

export const fetchPage = (dispatch) => ({contentType = 'page', uid = ''}) => {
  dispatch({
    type: 'FETCH_PAGE',
    payload: { uid }
  })
  return prismic.api('https://ifgirlsrantheworld.cdn.prismic.io/api').then((api) => (
    api.query(`[[:d = at(document.type, "${contentType}")]${uid && `[:d = at(my.${contentType}.uid, "${uid}")]`}]`)
  )).then((response) => (
    response.results[0] || {}
  )).then((json) => {
    receivePageSuccess(dispatch)(uid, json)
  }).catch((err) => {
    receivePageFailure(dispatch)(uid, err)
    return Promise.reject(err)
  })
}

export const receivePageFailure = (dispatch) => (uid, error) => {
  dispatch({
    type: 'RECEIVE_PAGE_FAILURE',
    payload: {
      uid,
      error
    }
  })
}

export const receivePageSuccess = (dispatch) => (uid, content) => {
  dispatch({
    type: 'RECEIVE_PAGE_SUCCESS',
    payload: {
      uid,
      content
    }
  })
}
