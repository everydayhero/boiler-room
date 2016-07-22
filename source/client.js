import React from 'react'
import withScroll from 'scroll-behavior'
import { Router, browserHistory, match } from 'react-router'
import { trigger } from 'redial'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { anchorate } from 'anchorate'

import routes from './Routes'
import { configureStore } from './store'

const onUpdate = () => {
  anchorate()
}

export default () => {
  const { document } = window
  const initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
  const store = configureStore(initialState)
  const history = withScroll(browserHistory, (_prevLoc, { hash }) => (
    !hash
  ))
  const { dispatch, getState } = store
  const WebFont = require('webfontloader')
  WebFont.load({
    google: {
      families: ['Montserrat']
    },
    typekit: {
      id: 'qwy4scr'
    },
    timeout: 2000
  })

  history.listen((location) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) throw new Error(error)

      const {
        components,
        params
      } = renderProps

      const {
        landingPages,
        charities
      } = getState()

      const locals = {
        dispatch,
        landingPages,
        charities,
        params
      }

      trigger('fetch', components, locals)
    })
  })

  render(
    <Provider store={store}>
      <Router history={history} routes={routes} onUpdate={onUpdate} />
    </Provider>,
    document.getElementById('mount')
  )
}
