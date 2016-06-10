import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './Home'
import FourOhFour from './FourOhFour'

export default (
  <Route
    path={`${process.env.BASE_PATH || '/'}`}
    component={({ children }) => children}>
    <IndexRoute
      component={Home}
    />
    <Route
      path='*'
      component={FourOhFour}
    />
  </Route>
)
