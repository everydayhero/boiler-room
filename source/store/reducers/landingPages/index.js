import { updateOrAddResource } from '../../../utils/collectionHelpers'

const updateOrAddPage = updateOrAddResource('route')

const deserializeResponse = (response = {}) => {
  const linkResolver = (ctx, doc, isBroken) => {
    if (isBroken) return '#broken'
    return `/${doc.slug}`
  }

  return {
    hero: {
      headings: response.getGroup('landing-page.scrollingHeadings')
        .toArray()
        .map((headings) => ([
          headings.getText('heading1'),
          headings.getText('heading2')
        ])),
      lead: response.getText('landing-page.lead'),
      cta: response.getText('landing-page.ctaText')
    },
    howItWorks: {
      heading: response.getText('landing-page.hiwHeading'),
      panels: response.getGroup('landing-page.panels')
        .toArray()
        .map((panel) => ({
          heading: panel.getText('panelHeading'),
          icon: panel.getText('panelIcon'),
          content: panel.getStructuredText('panelContent').asHtml({linkResolver}) || ''
        }))
    },
    about: {
      heading: response.getText('landing-page.aboutHeading'),
      content: response.getStructuredText('landing-page.aboutContent').asHtml({linkResolver}) || '',
      image: response.getImage('landing-page.aboutImage') ? response.getImage('landing-page.aboutImage').main : {}
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
