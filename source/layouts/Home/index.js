import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
import HowItWorks from '../HowItWorks'
import About from '../About'
import BringYourBff from '../BringYourBff'
import TheImpact from '../TheImpact'
import EmailFinalCTA from '../EmailFinalCTA'
import QuoteHero from '../QuoteHero'
import Contact from '../Contact'

const Home = ({
  title,
  hero = {},
  email = {},
  bff = {}
}) => (
  <Main title={title}>
    <Hero {...hero} email={email} />
    <HowItWorks />
    <About />
    <BringYourBff {...bff}/>
    <TheImpact />
    <EmailFinalCTA email={email} />
    <QuoteHero />
    <Contact />
  </Main>
)

Home.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  email: PropTypes.object,
  bff: PropTypes.object,
  about: PropTypes.object
}

export default Home
