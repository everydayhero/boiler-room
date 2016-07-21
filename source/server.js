import DocumentTitle from 'react-document-title'
import React from 'react'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Document from './layouts/Document'
import routes from './Routes'
import { fetchLandingPage } from './store/actions/landingPages'
import { fetchCharities } from './store/actions/charities'
import { configureStore } from './store'
import { trigger } from 'redial'

const prefetchedStore = () => {
  const store = configureStore()
  return Promise.all([
    fetchCharities(store.dispatch)(),
    fetchLandingPage(store.dispatch)('home')
  ]).then(() => (store))
}

const generatedRoutes = (store) => (
  store.getState().charities.data.map((charity) => (
    `/${charity.uid}`
  ))
)

const app = (route, store, callback) => {
  match(
    { routes, location: route },
    (error, _, renderProps) => {
      if (error) return callback(error)

      try {
        const { components, params } = renderProps
        const { dispatch, getState } = store
        const locals = { dispatch, params }

        trigger('fetch', components, locals).then((res) => {
          const content = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          )
          const document = '<!DOCTYPE html>' + renderToStaticMarkup(
            <Document title={DocumentTitle.rewind()} content={content} state={getState()} />
          )
          callback(null, document)
        }).catch((e) => {
          callback(e)
        })
      } catch (e) {
        callback(e)
      }
    }
  )
}

export default {
  prefetchedStore,
  generatedRoutes,
  app
}
