import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
import HowItWorks from '../HowItWorks'
import About from '../About'
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
  bff = {},
  impact = {},
  charities = {},
  partners = {}
}) => (
  <Main title={title}>
    <Hero {...hero} email={email} />
    <HowItWorks {...hiw} />
    <About />
    <BringYourBff {...bff} />
    <TheImpact {...impact} />
    <Register charities={charities} />
    <Partners partners={partners} />
    <QuoteHero />
  </Main>
)

Home.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  email: PropTypes.object,
  hiw: PropTypes.object,
  bff: PropTypes.object,
  impact: PropTypes.object,
  about: PropTypes.object,
  charities: PropTypes.object,
  partners: PropTypes.array
}

export default Home
