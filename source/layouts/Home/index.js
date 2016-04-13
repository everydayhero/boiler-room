import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
// TODO: Import other home "layouts"

const Home = ({
  title,
  hero = {}
}) => (
  <Main title={title}>
    <Hero {...hero} />
    <div>TODO: HowItWorks</div>
    <div>TODO: About</div>
    <div>TODO: BringYourBff</div>
    <div>TODO: TheImpact</div>
    <div>TODO: EmailFinalCTA</div>
    <div>TODO: QuoteHero</div>
    <div>TODO: Sponsors</div>
  </Main>
)

Home.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  about: PropTypes.object
}

export default Home
