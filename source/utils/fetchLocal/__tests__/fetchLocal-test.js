import { expect } from 'chai'
import sinon from 'sinon'

const proxyquire = require('proxyquire')
  .noPreserveCache()

describe('fetchLocal', () => {
  it('returns a promise with resovles to the file contents', (done) => {
    const fetchLocal = proxyquire('../', {
      'fs': {
        readFile (_, __, cb) {
          cb(null, '{ "greeting": "Hello!!!" }')
        }
      }
    }).default

    fetchLocal('foobar')
      .then((result) => {
        expect(result.greeting).to.eq('Hello!!!')
        done()
      }).catch(done)
  })

  context('on the server side', () => {
    it('calls fs.readFile with the provided path', () => {
      const spy = sinon.spy()
      const fetchLocal = proxyquire('../', {
        'fs': {
          readFile: spy
        },
        'path': {
          join (...args) { return args.pop() }
        }
      }).server

      fetchLocal('baz')
      expect(spy.getCall(0).args[0]).to.eq('baz')
    })
  })

  context('on the client side', () => {
    it('calls global.fetch with process.env.BASE_PATH prepended to the provided path', () => {
      const spy = sinon.spy(() => {
        return Promise.resolve()
      })
      const fetchLocal = require('../').client
      const initialFetch = global.fetch
      global.fetch = spy

      fetchLocal('baz')
      expect(spy.getCall(0).args[0]).to.eq('/baz')

      global.fetch = initialFetch
    })
  })
})
