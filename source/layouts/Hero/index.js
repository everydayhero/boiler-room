import React, { PropTypes } from 'react'

import Logo from '../../components/Logo'
import ScrollingHeading from '../../components/ScrollingHeading'
import styles from './styles.css'

const Hero = ({
  headings = [],
  lead = '',
  cta = '',
  charityLogo,
  charityTitle = ''
}) => (
  <div className={styles.root}>
    <div className={styles.top}>
      <Logo />
      {charityLogo && (
        <div className={styles.charityLogo}>
          <img src={charityLogo.url} alt={charityTitle} />
        </div>
      )}
    </div>
    <div className={styles.bottom}>
      <ScrollingHeading headings={headings} />
      <div className={styles.heroText}
        dangerouslySetInnerHTML={{__html: lead}} />
      <div className={styles.register}>
        <a className={styles.registerButton} href='#register'>{cta}</a>
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  scrollingHeadings: PropTypes.array,
  leadText: PropTypes.string
}

export default Hero
