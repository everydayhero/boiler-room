import sinon from 'sinon'
import { expect } from 'chai'

const proxyquire = require('proxyquire')
  .noPreserveCache()

const setup = (fetchLocalImpl = () => Promise.resolve()) => {
  const fetchLocalSpy = sinon.spy(fetchLocalImpl)
  const dispatchSpy = sinon.spy()
  const { fetchPage } = proxyquire('../', {
    '../../../utils/fetchLocal': {
      default: fetchLocalSpy
    }
  })
  return {
    fetchLocalSpy,
    dispatchSpy,
    fetchPage
  }
}

describe('fetchPage', () => {
  it('calls fetchLocal with a path to local page content json', () => {
    const { fetchPage, fetchLocalSpy } = setup()

    fetchPage(() => {})('example')
    const arg = fetchLocalSpy.getCall(0).args[0]
    expect(arg).to.eq('content/example/index.json')
  })

  context('when the provided route is `home` content/index.json is requested', () => {
    const { fetchPage, fetchLocalSpy } = setup()

    fetchPage(() => {})('home')
    const arg = fetchLocalSpy.getCall(0).args[0]
    expect(arg).to.eq('content/index.json')
  })

  it('dispatches an action', () => {
    const { fetchPage, dispatchSpy } = setup()

    fetchPage(dispatchSpy)('')

    expect(dispatchSpy).to.be.ok
  })

  describe('the dispatched action', () => {
    const { fetchPage, dispatchSpy } = setup()

    fetchPage(dispatchSpy)('example')

    const action = dispatchSpy.getCall(0).args[0]

    it('has a type of FETCH_PAGE', () => {
      expect(action.type).to.eq('FETCH_PAGE')
    })

    it('contains the supplied route', () => {
      expect(action.route).to.eq('example')
    })
  })
})
