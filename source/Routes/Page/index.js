import React from 'react'
import { connect } from 'react-redux'

import PageLayout from '../../layouts/Page'

import { fetchPage } from '../../store/actions/pages'
import fetchIntoStore from '../../utils/fetchIntoStore'

export const fetchPageContent = ({
  subscribe,
  getState,
  dispatch
}) => ({ params: { splat } }, replace, callback) => {
  fetchIntoStore({
    subscribe,
    getState
  }, {
    fetcher: fetchPage(dispatch),
    identifier: splat || 'home',
    resourceName: 'pages'
  }).then(() => {
    callback()
  }).catch(() => {
    replace('404')
  })
}

export default connect(
  ({ pages }) => ({ pages })
)(({ params: { splat }, pages }) => {
  const { content: { index: { title, body } } } = pages[splat || 'home']

  return (
    <PageLayout
      title={title}
      body={body}
    />
  )
})
