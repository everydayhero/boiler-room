import React from 'react'

import HowItWorksPanel from '../../components/HowItWorksPanel'
import styles from './styles.css'

export default ({
  title,
  panels
}) => (
  <div className={styles.root}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.content}>
      <div className={styles.panels}>
        {panels.map((panel, key) => (
          <div
            key={key}
            className={styles.item}>
            <HowItWorksPanel invert={(key % 2) !== 0} {...panel}/>
          </div>
        ))}
      </div>
    </div>
  </div>
)
