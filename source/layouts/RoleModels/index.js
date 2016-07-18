import React from 'react'

import Carousel from '../../components/Carousel'
import RoleModelsPanel from '../../components/RoleModelsPanel'
import styles from './styles.css'

export default ({
  heading = 'Role Models',
  lead,
  quote,
  panels
}) => (
  <div className={styles.root} id='role-models'>
    <div className={styles.header}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.lead}>
        <p className={styles.intro}>{lead}</p>
        <p className={styles.tagline}>{quote}</p>
      </div>
    </div>
    <div className={styles.content}>
      <Carousel items={panels} ItemComponent={RoleModelsPanel} />
    </div>
  </div>
)
