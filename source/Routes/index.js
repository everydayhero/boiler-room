import React from 'react'
import { Route, IndexRoute } from 'react-router'


import SimpleContent, { fetchContent } from './SimpleContent'

export default (
  <Route
    path={`${process.env.BASE_PATH || '/'}`}
    component={({ children }) => children}>
    <IndexRoute
      component={SimpleContent}
      onEnter={fetchContent}
    />
    <Route
      path='*'
      component={SimpleContent}
      onEnter={fetchContent}
    />
  </Route>
)
