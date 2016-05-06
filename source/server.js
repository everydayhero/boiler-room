import DocumentTitle from 'react-document-title'
import React from 'react'
import { Provider } from 'react-redux'
import { match, RoutingContext } from 'react-router'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Document from './layouts/Document'
import createRoutes from './Routes'
import { configureStore } from './store'

export default (route, callback) => {
  const store = configureStore()

  match(
    { routes: createRoutes(store), location: route },
    (error, _, renderProps) => {
      if (error) return callback(error)

      try {
        const content = renderToString(
          <Provider store={store}>
            <RoutingContext { ...renderProps } />
          </Provider>
        )
        const document = '<!DOCTYPE html>' + renderToStaticMarkup(
          <Document title={DocumentTitle.rewind()} content={content} state={store.getState()} />
        )
        callback(null, document)
      } catch (e) {
        callback(e)
      }
    }
  )
}
