import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} id='about' className={styles.root}>
    <h2 className={styles.title}>About</h2>
    <div className={styles.body}>
      <div className={styles.content}>
        <p className={styles.text}>Studies show that when women are supported and empowered, all of society benefits. </p>
        <p className={styles.text}>So, this October, join us as we collectively and virtually run around the world raising funds and awareness to empower girls globally.  Whether you run once or everyday, raise $10 or $10,000, your time, effort, energy and voice will change lives and build communities all over the world.</p>
        <p className={styles.text}>Run wherever and whenever and track your miles <a href=''>Strava</a> or <a href='http://www.mapmyfitness.com/'>MapMyFitness</a> during the month long virtual challenge to add to our collective progress.  Share your story with friends and family to raise funds for the cause that means the most to you.</p>
        <p className={styles.text}><span className={styles.aboutBold}>Although worlds apart, we are in this together. Virtually, anything is possible.</span></p>
      </div>
      <div className={styles.image}>
        <div className={styles.aboutLogo}><img src='/layouts/About/tracking-world.png' alt='Track Your Miles' /></div>
      </div>
    </div>
  </div>
)
