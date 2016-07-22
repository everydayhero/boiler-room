import { combineReducers } from 'redux'

import landingPages from './landingPages'
import charities from './charities'
import pages from './pages'

export default combineReducers({
  landingPages,
  charities,
  pages
})
