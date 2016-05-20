import fetchLocal from '../../../utils/fetchLocal'

export const fetchPage = (dispatch) => (route) => {
  const resourcePath = route === 'home' ? '' : `/${route}`

  dispatch({
    type: 'FETCH_PAGE',
    route
  })

  return global.fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?content_type=page&fields.slug=${route}`, {
    headers: {
      'Authorization': `Bearer ${process.env.CONTENTFUL_API_TOKEN}`
    }
  }).then(
    (response) => response.json()
  ).then((json) => {
    receivePageSuccess(dispatch)(route, json)
  })
  .catch((err) => {
    receivePageFailure(dispatch)(route, err)
    return Promise.reject(err)
  })
}

export const receivePageFailure = (dispatch) => (route, error) => {
  dispatch({
    type: 'RECEIVE_PAGE_FAILURE',
    route,
    error
  })
}

export const receivePageSuccess = (dispatch) => (route, content) => {
  dispatch({
    type: 'RECEIVE_PAGE_SUCCESS',
    route,
    content
  })
}
