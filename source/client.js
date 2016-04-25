import React from 'react'
import Router, { match } from 'react-router'
import { createHistory } from 'history'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import createRoutes from './Routes'
import { configureStore } from './store'

const scrollToHash = ({ location, document, scrollTo }) => () => {
  const { hash } = location

  if (hash) {
    let target = document.querySelector(hash)
    if (target) target.scrollIntoView()
  } else {
    scrollTo(0, 0)
  }
}

export default () => {
  const { location, document } = window
  const initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
  const store = configureStore(initialState)

  match(
    { routes: createRoutes(store), location },
    (error, _, renderProps) => {
      if (error) throw new Error(error)

      render(
        <Provider store={store}>
          <Router
            { ...renderProps }
            history={createHistory()}
            onUpdate={scrollToHash(window)}
          />
        </Provider>,
        document.getElementById('mount')
      )
    }
  )
}
