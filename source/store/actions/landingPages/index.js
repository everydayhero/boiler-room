import prismic from 'prismic.io'

export const fetchLandingPage = (dispatch) => (route = 'home') => {
  dispatch({
    type: 'FETCH_LANDING_PAGE',
    payload: { route }
  })
  return prismic.api('https://ifgirlsrantheworld.cdn.prismic.io/api').then((api) => (
    api.query(`[[:d = at(document.type, "landing-page")][:d = at(my.landing-page.uid, "${route}")]]`)
  )).then((response) => (
    response.results[0]
  )).then((json) => {
    receiveLandingPageSuccess(dispatch)(route, json)
  }).catch((err) => {
    receiveLandingPageFailure(dispatch)(route, err)
    return Promise.reject(err)
  })
}

export const receiveLandingPageFailure = (dispatch) => (route, error) => {
  dispatch({
    type: 'RECEIVE_LANDING_PAGE_FAILURE',
    payload: {
      route,
      error
    }
  })
}

export const receiveLandingPageSuccess = (dispatch) => (route, content) => {
  dispatch({
    type: 'RECEIVE_LANDING_PAGE_SUCCESS',
    payload: {
      route,
      content
    }
  })
}
