import React from 'react'
import { Route, IndexRoute } from 'react-router'

import store from '../store'

import Home from '../pages/Home'
import About from '../pages/About'

const isFetched = ({ status }) =>
  status === 'fetched'

const handlePageEnter = (nextState, replace, callback) => {
  const route = nextState.location.pathname.replace(/\/$/, '')
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (isFetched(state.pages[route])) {
      callback()
      unsubscribe()
    }
  })
  store.dispatch({
    type: 'FETCH_PAGE',
    route
  })
}

export default (
  <Route path="/" component={ ({ children }) => children }>
    <IndexRoute
      component={ Home }
    />
    <Route
      path="/about"
      component={ About }
      onEnter={ handlePageEnter }
    />
  </Route>
)