import React from 'react'

import PageNav from '../../components/PageNav'
import nav from '../../content/nav.json'

export default ({
  charity
}) => {
  if (charity) {
    delete nav['charityPartners']
  }
  return (
    <header>
      <PageNav nav={nav} />
    </header>
  )
}
