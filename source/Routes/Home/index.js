import find from 'lodash/find'
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'

import HomeLayout from '../../layouts/Home'
import bff from '../../content/bringYourBff.json'

import { fetchLandingPage } from '../../store/actions/landingPages'

const isFetched = ({ status } = {}) => status === 'fetched'

const unlessFetched = (resource = {}, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)

export const fetchHomePageContent = ({
  dispatch,
  landingPages = {}
}) => {
  const homePage = find(landingPages.data, (p) => p.route === 'home')
  return new Promise((resolve, reject) => {
    Promise.all([
      unlessFetched(homePage, () => fetchLandingPage(dispatch)('home'))
    ]).then(resolve, reject)
  })
}

const hooks = {
  fetch: ({
    dispatch,
    landingPages
  }) => (
    fetchHomePageContent({
      dispatch,
      landingPages
    })
  )
}

const mapStateToProps = ({
  landingPages = {}
}) => ({
  landingPages: landingPages.data
})

const Home = ({
  landingPages = {},
  location = {}
}) => {
  const { content = {} } = landingPages.find((h) => h.route === 'home') || {}
  const title = 'If Girls Ran the World | October 1-31'
  return (
    <HomeLayout
      title={title}
      content={content}
      bff={bff}
      />
  )
}

const HomeWithHooks = provideHooks(hooks)(Home)

export default connect(
  mapStateToProps
)(HomeWithHooks)
