import React from 'react'

import styles from './styles.css'

export default ({
  image,
  name,
  intro,
  quote,
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image.url} alt={name} />
    </div>
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.subHeading}>{intro}</p>
    <p className={styles.content}>“{quote}”</p>
  </div>
)
