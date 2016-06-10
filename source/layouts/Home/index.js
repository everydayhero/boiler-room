import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
import HowItWorks from '../HowItWorks'
import About from '../About'
import RoleModels from '../RoleModels'
import BringYourBff from '../BringYourBff'
import TheImpact from '../TheImpact'
import Register from '../Register'
import QuoteHero from '../QuoteHero'
import Partners from '../Partners'

const Home = ({
  title,
  hero = {},
  email = {},
  hiw = {},
  rolemodels = {},
  bff = {},
  impact = {},
  charities = {},
  partners = {}
}) => (
  <Main title={title}>
    <Hero {...hero} />
    <HowItWorks {...hiw} />
    <About />
    <RoleModels {...rolemodels} />
    <TheImpact {...impact} />
    <Register charities={charities} />
    <BringYourBff {...bff} />
    <Partners partners={partners} />
    <QuoteHero />
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
  about: PropTypes.object,
  charities: PropTypes.object,
  partners: PropTypes.array
}

export default Home
