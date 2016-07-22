import { updateOrAddResource } from '../../../utils/collectionHelpers'

const updateOrAddPage = updateOrAddResource('uid')

const deserializeResponse = (response = {}) => {
  if (!response.getText) {
    return {}
  }
  return {
    title: response.getText('faqs.title') || undefined,
    faqs: response.getGroup('faqs.faqs')
      ? response.getGroup('faqs.faqs')
        .toArray()
        .map((faq) => ({
          question: faq.getText('question'),
          answer: faq.getText('answer')
        }))
      : undefined
  }
}

const fetchPage = (pages, { uid }) => {
  return {
    ...pages,
    data: updateOrAddPage(pages.data, { uid, status: 'fetching' })
  }
}

const receivePageFailure = (pages, { uid, error = '' }) => {
  return {
    ...pages,
    data: updateOrAddPage(pages.data, { uid, error, status: 'failed' })
  }
}

const receivePageSuccess = (pages, { uid, content = {} } = {}) => {
  return {
    ...pages,
    data: updateOrAddPage(pages.data, {
      uid,
      content: deserializeResponse(content),
      status: 'fetched'
    })
  }
}

export default (pages = { data: [] }, { type, payload }) => {
  switch (type) {
    case 'FETCH_PAGE':
      return fetchPage(pages, payload)
    case 'RECEIVE_PAGE_FAILURE':
      return receivePageFailure(pages, payload)
    case 'RECEIVE_PAGE_SUCCESS':
      return receivePageSuccess(pages, payload)
    default:
      return pages
  }
}
