import React from 'react'

import HomeLayout from '../../layouts/Home'
import heroContent from '../../content/hero.json'
import bffContent from '../../content/bringYourBff.json'
// TODO: Import content here

export default () => (
  <HomeLayout
    hero={heroContent}
    bff={bffContent}
    />
)
