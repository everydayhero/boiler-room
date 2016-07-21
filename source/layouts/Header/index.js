import React from 'react'

import PageNav from '../../components/PageNav'
import nav from '../../content/nav.json'

export default ({
  charity,
  ...props
}) => {
  if (charity) {
    delete nav['charityPartners']
  }
  return (
    <header>
      <PageNav nav={nav} {...props} />
    </header>
  )
}
