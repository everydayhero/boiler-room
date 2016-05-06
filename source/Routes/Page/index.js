import React from 'react'
import { connect } from 'react-redux'

import PageLayout from '../../layouts/Page'

import { fetchPage } from '../../store/actions/pages'

export const fetchPageContent = ({
  subscribe,
  getState,
  dispatch
}) => ({ params: { splat } }, replace, callback) => {
  fetchPage(dispatch)(splat || 'home')
    .then(() => {
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
