import { updateOrAddResource } from '../../../utils/collectionHelpers'

const updateOrAddPage = updateOrAddResource('route')

const deserializeResponse = (response = {}) => {
  const linkResolver = (ctx, doc, isBroken) => {
    if (isBroken) return '#broken'
    return `/${doc.slug}`
  }

  return {
    hero: {
      headings: response.getGroup('home.headings')
        .toArray()
        .map((headings) => headings.getText('heading')),
      lead: response.getText('home.lead'),
      cta: response.getText('home.ctaText')
    },
    howItWorks: {
      heading: response.getText('home.hiwHeading')
    }
  }
}

const fetchLandingPage = (landingPages, { route }) => {
  return {
    ...landingPages,
    data: updateOrAddPage(landingPages.data, { route, status: 'fetching' })
  }
}

const receiveLandingPageFailure = (landingPages, { route, error = '' }) => {
  return {
    ...landingPages,
    data: updateOrAddPage(landingPages.data, { route, error, status: 'failed' })
  }
}

const receiveLandingPageSuccess = (landingPages, { route, content = {} }) => {
  console.log(content)
  return {
    ...landingPages,
    data: updateOrAddPage(landingPages.data, {
      route,
      content: deserializeResponse(content),
      status: 'fetched'
    })
  }
}

export default (landingPages = { data: [] }, { type, payload }) => {
  switch (type) {
    case 'FETCH_LANDING_PAGE':
      return fetchLandingPage(landingPages, payload)
    case 'RECEIVE_LANDING_PAGE_FAILURE':
      return receiveLandingPageFailure(landingPages, payload)
    case 'RECEIVE_LANDING_PAGE_SUCCESS':
      return receiveLandingPageSuccess(landingPages, payload)
    default:
      return landingPages
  }
}
