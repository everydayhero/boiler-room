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
// TODO: Import other home "layouts"

const Home = ({
  title,
  hero = {}
}) => (
  <Main title={title}>
    <Hero {...hero} />
    <HowItWorks />
    <About />
    <BringYourBff />
    <TheImpact />
    <EmailFinalCTA />
    <QuoteHero />
    <Contact />
  </Main>
)

Home.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  about: PropTypes.object
}

export default Home
