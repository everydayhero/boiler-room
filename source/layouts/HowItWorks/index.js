import React from 'react'

import HowItWorksPanel from '../../components/HowItWorksPanel'
import ArrowTitle from '../../components/ArrowTitle'
import styles from './styles.css'

export default ({
  heading,
  panels
}) => (
  <div className={styles.root}>
    <div className={styles.fancyBox}>
      <ArrowTitle heading={heading} />
    </div>
    <div className={styles.content}>
      <div className={styles.panels}>
        {panels.map((panel, key) => (
          <div
            key={key}
            className={styles.item}>
            <HowItWorksPanel invert={(key % 2) !== 0} {...panel} />
          </div>
        ))}
      </div>
    </div>
  </div>
)
