import React from 'react'

import Logo from '../../components/Logo'
import styles from './styles.css'

export default () => (
  <div className={styles.root}>
    <div className={styles.top}>
      <div className={styles.image} />
      <Logo />
    </div>
    <div className={styles.bottom}>
      <div>TODO: SubHeading</div>
      <div>TODO: HeroLead</div>
      <div>TODO: EmailSubscribe</div>
    </div>
  </div>
)
