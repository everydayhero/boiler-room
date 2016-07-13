import React, { PropTypes } from 'react'

import Main from '../Main'
import Hero from '../Hero'
import HowItWorks from '../HowItWorks'
import About from '../About'
import RoleModels from '../RoleModels'
import BringYourBff from '../BringYourBff'
import Social from '../Social'
import Callout from '../Callout'
import TheImpact from '../TheImpact'
import Register from '../Register'
import QuoteHero from '../QuoteHero'
import Partners from '../Partners'

const Home = ({
  title = '',
  content = {}
}) => {
  const {
    scrollingHeadings = [],
    heroText = '',
    howItWorks = [],
    about = '',
    bringYourBff = {},
    bringYourBffImage = ''
  } = content
  console.log(bringYourBffImage)
  return (
    <Main title={title}>
      <Hero leadText={heroText} scrollingHeadings={scrollingHeadings}/>
      <HowItWorks panels={howItWorks} />
      <About content={about} />
      {/*<RoleModels {...rolemodels} />
      <TheImpact {...impact} />
      <Register charities={charities} /> */}
      <BringYourBff {...bringYourBff} image={bringYourBffImage} />
      <Social />
      <Callout />
      {/*<Partners partners={partners} />*/}
      <QuoteHero />
    </Main>
  )
}

Home.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object
}

export default Home
