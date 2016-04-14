import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.about }>
      <div className={ styles.aboutLeft }>
        <h1 className={ styles.title }>ABOUT</h1>
        <p className={ styles.text }><span className={ styles.aboutBold }>From October 1-31</span>, participants run their own neighbourhoods track their miles using fitness tracking apps like Strava or Map My Fitness during the month long virtual challenge.</p>
          <p className={ styles.text }>Runners can choose a featured charity or choose the cause that's closest to their heart. Individuals seek support from friends or family to collectively raise $1,500,000 for charity.</p>
          <p className={ styles.text }><span className={ styles.aboutBold }>Although worlds apart, we are in this together. Virtually, anything is possible.</span></p>
      </div>
      <div className={ styles.aboutRight }>
        <div className={ styles.aboutLogo }><img src="/layouts/About/about-logo.png" alt="Track Your Miles" /></div>
      </div>
    </div>
  </div>
)
