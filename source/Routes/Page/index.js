import React from 'react'
import { connect } from 'react-redux'

import PageLayout from '../../layouts/Page'
import ThankYouLayout from '../../layouts/ThankYou'

import { fetchPage } from '../../store/actions/pages'
import routes from '../../../config/static-routes'

const routeDetails = (route) => {
  const type = routes[`/${route || ''}`]
  route = route || 'home'
  return { route, type }
}

export const fetchPageContent = ({
  subscribe,
  getState,
  dispatch
}) => ({ params: { splat } }, replace, callback) => {
  const { route, type } = routeDetails(splat)

  fetchPage(dispatch)(route, type)
    .then(() => {
      callback()
    }).catch(() => {
      replace('404')
    })
}

export default connect(
  ({ pages }) => ({ pages })
)(({ params: { splat }, pages }) => {
  const { route, type } = routeDetails(splat)
  const { content } = pages[route]

  const layouts = {
    page: PageLayout,
    thankyou: ThankYouLayout
  }

  const Layout = layouts[type]

  return (
    <Layout
      {...content}
    />
  )
})
