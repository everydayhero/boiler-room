import DocumentTitle from 'react-document-title'
import React from 'react'
import Router, { match, RoutingContext } from 'react-router'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import { render } from 'react-dom'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import Document from './layouts/Document'
import Routes from './Routes'
import store from './store'

if (typeof document !== 'undefined') {
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
  match(
    { routes: Routes, location: window.location },
    (error, redirectLocation, renderProps) => {
      if (error) throw new Error(error)

      render(
        <Provider store={store}>
          <Router {...renderProps} history={createHistory()} />
        </Provider>,
        document.getElementById('mount')
      )
    }
  )
}

export default function staticRender (route, callback) {
  try {
    match(
      { routes: Routes, location: route },
      (error, redirectLocation, renderProps) => {
        if (error) {
          return callback(error)
        }
        const content = renderToString(
          <Provider store={store}>
            <RoutingContext { ...renderProps } />
          </Provider>
        )
        const document = '<!DOCTYPE html>' + renderToStaticMarkup(
          <Document title={DocumentTitle.rewind()} content={content} />
        )
        callback(null, document)
      }
    )
  } catch (error) {
    callback(error)
  }
}
