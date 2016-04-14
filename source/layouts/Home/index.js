import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
import BringYourBff from '../BringYourBff'
// TODO: Import other home "layouts"

const Home = ({
  title,
  hero = {},
  bff = {}
}) => (
  <Main title={title}>
    <Hero {...hero} />
    <div>TODO: HowItWorks</div>
    <div>TODO: About</div>
    <BringYourBff {...bff}/>
    <div>TODO: The Impact</div>
    <div>TODO: EmailFinalCTA</div>
    <div>TODO: QuoteHero</div>
    <div>TODO: Sponsors</div>
  </Main>
)

Home.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  bff: PropTypes.object,
  about: PropTypes.object
}

export default Home
