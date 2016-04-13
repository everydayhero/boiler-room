import React, { PropTypes } from 'react'

import Main from '../Main'
// TODO: Import all sections

const Home = ({
  title
}) => (
  <Main title={title}>
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
  title: PropTypes.string
}

export default Home
