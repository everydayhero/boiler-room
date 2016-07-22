import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'

import FaqsLayout from '../../layouts/Faqs'

import { fetchPage } from '../../store/actions/pages'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource = {}, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

export const fetchPageContent = ({
  dispatch,
  pages = { data: [] }
}) => {
  const faqs = pages.data.find((p) => p.uid === 'faqs')
  return new Promise((resolve, reject) => {
    Promise.all([
      unlessFetched(faqs, () => fetchPage(dispatch)({ contentType: 'faqs', uid: 'faqs' }))
    ]).then(resolve, reject)
  })
}

const hooks = {
  fetch: ({
    dispatch,
    pages
  }) => (
    fetchPageContent({
      dispatch,
      pages
    })
  )
}

const mapStateToProps = ({ pages }) => ({
  faqsData: pages.data.find((p) => p.uid === 'faqs')
})

const Faqs = ({
  faqsData = {}
}) => {
  const { content: { faqs = [] } } = faqsData
  return (
    <FaqsLayout
      faqs={faqs}
    />
  )
}

const FaqsWithHooks = provideHooks(hooks)(Faqs)

export default connect(
  mapStateToProps
)(FaqsWithHooks)
