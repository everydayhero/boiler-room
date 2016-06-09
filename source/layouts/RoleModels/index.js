import React from 'react'

import RoleModelsPanel from '../../components/HowItWorksPanel'
import styles from './styles.css'

export default ({
  title,
  panels
}) => (
  <div className={styles.root}>
    <div className={styles.fancyBox}>
    </div>
    <div className={styles.content}>
      <div className={styles.panels}>
        {panels.map((panel, key) => (
          <div
            key={key}
            className={styles.item}>
            <RoleModelsPanel invert={(key % 2) !== 0} {...panel}/>
          </div>
        ))}
      </div>
    </div>
  </div>
)
