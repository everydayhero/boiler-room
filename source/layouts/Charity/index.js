import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
import HowItWorks from '../HowItWorks'
import About from '../About'
import RoleModels from '../RoleModels'
import BringYourBff from '../BringYourBff'
import CharityRegister from '../CharityRegister'
import Callout from '../Callout'
import TheImpact from '../TheImpact'
import QuoteHero from '../QuoteHero'
import Partners from '../Partners'

const Home = ({
  content = {}
}) => {
  const {
    title = 'Charity',
    uid = '',
    logo = {},
    eventLink = {},
    hero = {},
    howItWorks = {},
    about = '',
    roleModels = {},
    impact = {},
    bff = {},
    partners = {}
  } = content
  const pageTitle = `${title || 'Charity'} | If Girls Ran The World`
  return (
    <Main title={pageTitle} charity registerLink={eventLink}>
      <Hero {...hero} charityLogo={logo} charityTitle={title} registerLink={eventLink} />
      <HowItWorks {...howItWorks} />
      <About {...about} />
      <RoleModels {...roleModels} />
      <TheImpact {...impact} />
      <CharityRegister eventLink={eventLink} />
      <BringYourBff {...bff} uid={uid} />
      <Callout />
      <Partners {...partners} />
      <QuoteHero />
    </Main>
  )
}

Home.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object
}

export default Home
