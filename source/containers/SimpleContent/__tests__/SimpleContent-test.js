import React from 'react'
import { Provider } from 'react-redux'
import chai, { expect } from 'chai'
import { mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'mocha-jsdom'

import { configureStore } from '../../../store'
import SimpleContent from '../'

chai.use(chaiEnzyme())

const createPage = (path, title = '', body = '') => ({
  pages: {
    [path]: {
      content: {
        title,
        body
      }
    }
  }
})

const setUp = (initialState = { pages: {} }, props = { params: { splat: '' } }) => {
  const store = configureStore(initialState)
  const component = (
    <Provider store={ store }>
      <SimpleContent { ...props } />
    </Provider>
  )
  const wrapper = mount(component)
  return {
    component,
    wrapper,
    header: wrapper.find('header'),
    section: wrapper.find('section')
  }
}

describe('SimpleContent', () => {
  jsdom()

  describe('props.params.splat', () => {
    context('is absent', () => {
      it('renders the \'/\' page content', () => {
        const state = createPage('/', 'HOME!')
        const props = {
          params: { splat: '' }
        }
        const { header } = setUp(state, props)
        expect(header.find('h1')).to.contain.text('HOME!')
      })
    })
  })

  describe('state.pages[props.params.splat].content', () => {
    context('is present', () => {
      it('renders the title attribute within the header element', () => {
        const state = createPage('dogs', 'DOGS!')
        const props = {
          params: { splat: 'dogs' }
        }
        const { header } = setUp(state, props)
        expect(header.find('h1')).to.contain.text('DOGS!')
      })

      it('renders the body attribute within the section element', () => {
        const state = createPage('dogs', '', 'Are great')
        const props = {
          params: { splat: 'dogs' }
        }
        const { section } = setUp(state, props)
        expect(section.find('div')).to.contain.text('Are great')
      })
    })

    context('is absent', () => {
      it('renders a 404 message', () => {
        const { section, header } = setUp({ pages: {}}, { params: { splat: '' }})

        expect(header.find('h1')).to.contain.text('404')
        expect(section.find('div')).to.contain.text('Whoops!')
      })
    })
  })
})
