import sinon from 'sinon'
import { expect } from 'chai'

const proxyquire = require('proxyquire')
  .noPreserveCache()

describe('fetchPage', () => {
  it('calls fetchLocal with a path to local page content json', () => {
    const mockFetchLocal = sinon.spy(() => (
      Promise.resolve()
    ))
    const { fetchPage } = proxyquire('../', {
      '../../../utils/fetchLocal': {
        default: mockFetchLocal
      }
    })

    fetchPage(() => ({}))('/example')
    const arg = mockFetchLocal.getCall(0).args[0]
    expect(arg).to.eq('content/example/index.json')
  })

  describe('dispatched action', () => {
    const { fetchPage } = proxyquire('../', {
      '../../../utils/fetchLocal': {
        default: () => (Promise.resolve())
      }
    })
    const mockDispatch = sinon.spy()

    fetchPage(mockDispatch)('/example')
    const action = mockDispatch.getCall(0).args[0]

    it('has a type of FETCH_PAGE', () => {
      expect(action.type).to.eq('FETCH_PAGE')
    })

    it('contains the supplied route', () => {
      expect(action.route).to.eq('/example')
    })
  })
})
