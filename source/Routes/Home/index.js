import React from 'react'

import HomeLayout from '../../layouts/Home'
import heroContent from '../../content/hero.json'
import emailContent from '../../content/email.json'
import hiwContent from '../../content/howItWorks.json'
import bffContent from '../../content/bringYourBff.json'
// TODO: Import content here

export default () => (
  <HomeLayout
    hero={heroContent}
    email={emailContent}
    hiw={hiwContent}
    bff={bffContent}
    />
)
