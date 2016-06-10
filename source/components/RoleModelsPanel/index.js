import React from 'react'

import styles from './styles.css'

export default ({
  image,
  name,
  subheading,
  content,
  ...props
}) => (
  <div {...props} className={styles.root}>
    <img className={styles.image} src={image} alt={name}/>
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.subHeading}>{subheading}</p>
    <p className={styles.content}>{content}</p>
  </div>
)
