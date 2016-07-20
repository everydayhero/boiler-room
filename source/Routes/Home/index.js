import find from 'lodash/find'
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'

import HomeLayout from '../../layouts/Home'

import { fetchLandingPage } from '../../store/actions/landingPages'
import { fetchCharities } from '../../store/actions/charities'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource = {}, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

export const fetchHomePageContent = ({
  dispatch,
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
    landingPages,
    charities
  }) => (
    fetchHomePageContent({
      dispatch,
      landingPages,
      charities
    })
  )
}

const mapStateToProps = ({
  landingPages = [],
  charities = []
}) => ({
  landingPages: landingPages.data,
  charities: charities.data
})

const Home = ({
  landingPages = [],
  charities = []
}) => {
  const { content = {} } = landingPages.find((h) => h.route === 'home') || {}
  const mergedContent = {
    ...content,
    register: {
      ...content.register,
      charities
    }
  }
  const title = 'If Girls Ran the World | October 1-31'
  return (
    <HomeLayout
      title={title}
      content={mergedContent}
      />
  )
}

const HomeWithHooks = provideHooks(hooks)(Home)

export default connect(
  mapStateToProps
)(HomeWithHooks)
