import { find, defaultsDeep } from 'lodash'
import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'

import CharityLayout from '../../layouts/Charity'

import { fetchLandingPage } from '../../store/actions/landingPages'
import { fetchCharities } from '../../store/actions/charities'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

export const fetchCharityContent = ({
  dispatch,
  params = {},
  landingPages = {},
  charities = {}
}) => {
  const homePage = find(landingPages.data, (p) => p.route === 'home')

  return new Promise((resolve, reject) => {
    Promise.all([
      unlessFetched(homePage, () => fetchLandingPage(dispatch)('home')),
      unlessFetched(charities, () => fetchCharities(dispatch)())
    ]).then(resolve, reject)
  })
}

const hooks = {
  fetch: ({
    dispatch,
    params,
    landingPages,
    charities
  }) => (
    fetchCharityContent({
      dispatch,
      params,
      landingPages,
      charities
    })
  )
}

const mapStateToProps = ({
  landingPages = {},
  charities = {}
}) => ({
  landingPages: landingPages.data,
  charities: charities.data
})

const Charity = ({
    landingPages = [],
    charities = [],
    params: { uid } = { uid: '' },
    location: { query, hash } = { query: {}, hash: '' }
}) => {
  const { content: homeContent = {} } = landingPages.find((h) => h.route === 'home') || {}
  const charityContent = charities.find((c) => c.uid === uid) || {}
  const content = defaultsDeep({}, charityContent, homeContent)
  return (
    <CharityLayout
      content={content}
      />
  )
}

const CharityWithHooks = provideHooks(hooks)(Charity)

export default connect(mapStateToProps)(CharityWithHooks)
