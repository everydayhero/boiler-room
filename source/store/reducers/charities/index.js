import { updateOrAddResource, mergeCollections } from '../../../utils/collectionHelpers'

const updateOrAddCharity = updateOrAddResource('uid')
const mergeCharityCollections = mergeCollections('uid')

const deserializeCharities = (results = []) => {
  const linkResolver = (ctx, doc, isBroken) => {
    if (isBroken) return '#broken'
    return `/${doc.uid}`
  }

  return results.map((result = {}) => {
    const eventLink = result.getLink('charity.eventLink')
    return {
      uid: result.uid,
      title: result.getText('charity.title') || undefined,
      logo: result.getImage('charity.logo')
        ? result.getImage('charity.logo').main
        : { url: '' },
      eventLink: eventLink ? eventLink.url(linkResolver) : undefined,
      type: result.getText('charity.type') || 'secondary',
      about: {
        heading: result.getText('charity.aboutHeading') || undefined,
        content: result.getStructuredText('charity.aboutContent')
          ? result.getStructuredText('charity.aboutContent').asHtml({linkResolver})
          : undefined
      },
      impact: {
        heading: result.getText('charity.impactHeading') || undefined,
        lead: result.getText('charity.impactLead') || undefined,
        quote: result.getText('charity.impactQuote') || undefined,
        cite: result.getText('charity.impactQuoteCite') || undefined,
        items: result.getGroup('charity.impactItems')
          ? result.getGroup('charity.impactItems')
            .toArray()
            .map((item) => ({
              image: item.getImage('image') ? item.getImage('image').main : undefined,
              dollars: item.getText('dollars') || undefined,
              heading: item.getText('heading') || undefined,
              content: item.getText('content') || undefined
            }))
          : undefined
      }
    }
  })
}

const fetchCharities = (charities) => ({
  ...charities,
  status: 'fetching'
})

const receiveCharitiesFailure = (charities, { error }) => ({
  ...charities,
  status: 'failed',
  error
})

const receiveCharitiesSuccess = (charities, { data }) => {
  return {
    ...charities,
    status: 'fetched',
    error: null,
    data: mergeCharityCollections(charities.data, deserializeCharities(data))
  }
}

const fetchCharity = (charities, { uid }) => {
  return {
    ...charities,
    data: updateOrAddCharity(charities.data, { uid, status: 'fetching' })
  }
}

const receiveCharityFailure = (charities, { uid, error = '' }) => {
  return {
    ...charities,
    data: updateOrAddCharity(charities.data, { uid, error, status: 'failed' })
  }
}

const receiveCharitySuccess = (charities, { uid, content = '' }) => {
  return {
    ...charities,
    data: updateOrAddCharity(charities.data, { uid, content, error: null, status: 'fetched' })
  }
}

export default (charities = { data: [] }, { type, payload }) => {
  switch (type) {
    case 'FETCH_CHARITIES':
      return fetchCharities(charities, payload)
    case 'RECEIVE_CHARITIES_FAILURE':
      return receiveCharitiesFailure(charities, payload)
    case 'RECEIVE_CHARITIES_SUCCESS':
      return receiveCharitiesSuccess(charities, payload)
    case 'FETCH_CHARITY':
      return fetchCharity(charities, payload)
    case 'RECEIVE_CHARITY_FAILURE':
      return receiveCharityFailure(charities, payload)
    case 'RECEIVE_CHARITY_SUCCESS':
      return receiveCharitySuccess(charities, payload)
    default:
      return charities
  }
}
