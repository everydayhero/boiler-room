import React from 'react'

import Carousel from '../../components/Carousel'
import RoleModelsPanel from '../../components/RoleModelsPanel'
import styles from './styles.css'

export default ({
  title,
  panels
}) => (
  <div className={styles.root} id='role-models'>
    <div className={styles.header}>
      <h2 className={styles.title}>Role Models</h2>
      <div className={styles.lead}>
        <p className={styles.intro}>Our Role Models are a passionate and eclectic group of women from across the country. They are strong, bold, beautiful, and committed to empowering girls around the globe through their involvement with If Girls Ran the World.   We admire their passion, their purpose, and their positivity.</p>
        <p className={styles.tagline}>They inspire us, we hope they’ll inspire you too.</p>
      </div>
    </div>
    <div className={styles.content}>
      <Carousel items={panels} ItemComponent={RoleModelsPanel} />
    </div>
  </div>
)
