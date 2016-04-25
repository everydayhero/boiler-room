import { expect } from 'chai'
import sinon from 'sinon'
import fetchIntoStore from '../'

function noop () {}

describe('fetchIntoStore', () => {
  it('calls the provided fetcher function with the passed identifier', () => {
    const mockStore = {
      subscribe () {},
      getState () { return { dogs: {} } }
    }
    const mockFetcher = sinon.spy()

    fetchIntoStore(mockStore, {
      fetcher: mockFetcher,
      identifier: 'fido',
      resourceName: 'dogs'
    })

    expect(mockFetcher.getCall(0).args[0]).to.eq('fido')
  })

  context('when successful', () => {
    let state = { dogs: {} }
    let listener = noop
    const mockState = {
      dogs: {
        fido: {
          status: 'fetched',
          barks: 'Softly'
        }
      }
    }

    const mockStore = {
      subscribe (subscriber) {
        state = mockState
        listener = subscriber

        return noop
      },
      getState () {
        return state
      }
    }

    it('returns a promise, which when resolved, passes the requested resource', (done) => {
      fetchIntoStore(mockStore, {
        fetcher: () => {},
        identifier: 'fido',
        resourceName: 'dogs'
      }).then((result) => {
        expect(result.barks).to.eq('Softly')
        done()
      }).catch(done)
      listener()
    })
  })

  context('when unsuccessful', () => {
    let state = { dogs: {} }
    let listener = noop
    const mockState = {
      dogs: {
        fido: {
          status: 'failed',
          error: new Error('Wamp!')
        }
      }
    }

    const mockStore = {
      subscribe (subscriber) {
        state = mockState
        listener = subscriber

        return noop
      },
      getState () {
        return state
      }
    }

    it('returns a promise which, when rejected, passes the error', (done) => {
      fetchIntoStore(mockStore, {
        fetcher: () => {},
        identifier: 'fido',
        resourceName: 'dogs'
      }).catch((error) => {
        expect(error.message).to.eq('Error: Wamp!')
        done()
      }).catch(done)
      listener()
    })
  })
})
