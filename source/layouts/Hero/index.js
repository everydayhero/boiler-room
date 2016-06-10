import React, { PropTypes } from 'react'

import Logo from '../../components/Logo'
import ScrollingHeading from '../../components/ScrollingHeading'
import styles from './styles.css'

const Hero = ({
  scrollingHeadings,
  leadText,
  email
}) => (
  <div className={styles.root}>
    <div className={styles.top}>
      <div className={styles.image} />
      <Logo />
    </div>
    <div className={styles.bottom}>
      <ScrollingHeading headings={scrollingHeadings}/>
      <div className={styles.heroText}>{leadText}</div>
        <div className={styles.register}>
          <a className={styles.registerButton} href="">Register</a>
        </div>
    </div>
  </div>
)

Hero.propTypes = {
  scrollingHeadings: PropTypes.array,
  leadText: PropTypes.string,
  email: PropTypes.object
}

export default Hero
