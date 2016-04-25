import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Page, { fetchPageContent } from './Page'
import FourOhFour from './FourOhFour'

export default (store) => (
  <Route
    path={`${process.env.BASE_PATH || '/'}`}
    component={({ children }) => children}>
    <IndexRoute
      onEnter={fetchPageContent(store)}
      component={Page}
    />
    <Route
      path='404'
      component={FourOhFour}
    />
    <Route
      path='*'
      onEnter={fetchPageContent(store)}
      component={Page}
    />
  </Route>
)
