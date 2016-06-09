import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
import HowItWorks from '../HowItWorks'
import About from '../About'
import RoleModels from '../RoleModels'
import BringYourBff from '../BringYourBff'
import TheImpact from '../TheImpact'
import EmailFinalCTA from '../EmailFinalCTA'
import QuoteHero from '../QuoteHero'
import Contact from '../Contact'

const Home = ({
  title,
  hero = {},
  email = {},
  hiw = {},
  rolemodels = {},
  bff = {},
  impact = {}
}) => (
  <Main title={title}>
    <Hero {...hero} />
    <HowItWorks {...hiw} />
    <About />
    <RoleModels {...rolemodels} />
    <BringYourBff {...bff} />
    <TheImpact {...impact} />
    <EmailFinalCTA email={email} />
    <QuoteHero />
    <Contact />
  </Main>
)

Home.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  email: PropTypes.object,
  hiw: PropTypes.object,
  rolemodels: PropTypes.object,
  bff: PropTypes.object,
  impact: PropTypes.object,
  about: PropTypes.object
}

export default Home
