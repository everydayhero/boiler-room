import React from 'react'

import RoleModelsPanel from '../../components/RoleModelsPanel'
import styles from './styles.css'

export default ({
  title,
  panels
}) => (
  <div className={styles.root}>
    <div className={styles.fancyBox}>
      <h2 className={styles.title}>ROLE MODELS</h2>
      <p className={styles.intro}>Our Role Models are a passionate and eclectic group of women from across the country. They are strong, bold, beautiful, and committed to empowering girls around the globe through their involvement with If Girls Ran the World.   We admire their passion, their purpose, and their positivity.</p>
      <p className={styles.tagline}>They inspire us, we hope they’ll inspire you too.</p>
    </div>
    <div className={styles.content}>
      <div className={styles.panels}>
        {panels.map((panel, key) => (
          <div
            key={key}
            className={styles.item}>
            <RoleModelsPanel {...panel}/>
          </div>
        ))}
      </div>
    </div>
  </div>
)
