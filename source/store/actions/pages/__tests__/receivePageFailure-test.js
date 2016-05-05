import sinon from 'sinon'
import { expect } from 'chai'

const proxyquire = require('proxyquire')
  .noPreserveCache()

describe('receivePageFailure', () => {
  const { receivePageFailure } = proxyquire('../', {
    '../../../utils/fetchLocal': {
      default: () => (Promise.resolve())
    }
  })
  const mockDispatch = sinon.spy()

  receivePageFailure(mockDispatch)('/example', 'Example error')
  const action = mockDispatch.getCall(0).args[0]

  it('has a type of RECEIVE_PAGE_FAILURE', () => {
    expect(action.type).to.eq('RECEIVE_PAGE_FAILURE')
  })

  it('contains the supplied route', () => {
    expect(action.route).to.eq('/example')
  })

  it('contains the supplied error', () => {
    expect(action.error).to.eq('Example error')
  })
})
