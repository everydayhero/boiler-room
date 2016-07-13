import React, { PropTypes } from 'react'

import Logo from '../../components/Logo'
import ScrollingHeading from '../../components/ScrollingHeading'
import styles from './styles.css'

const Hero = ({
  scrollingHeadings = [],
  leadText = ''
}) => (
  <div className={styles.root}>
    <div className={styles.top}>
      <div className={styles.image} />
      <Logo />
    </div>
    <div className={styles.bottom}>
      <ScrollingHeading headings={scrollingHeadings}/>
      <div className={styles.heroText}
        dangerouslySetInnerHTML={{__html: leadText}} />
      <div className={styles.register}>
        <a className={styles.registerButton} href='#register'>Register Now</a>
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  scrollingHeadings: PropTypes.array,
  leadText: PropTypes.string
}

export default Hero
