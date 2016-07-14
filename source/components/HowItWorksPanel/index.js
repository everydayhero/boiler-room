import React from 'react'

import Icon from '../Icon'
import styles from './styles.css'

export default ({
  icon,
  heading,
  content,
  invert,
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={invert ? styles.iconInverted : styles.icon}>
      <Icon name={icon} />
    </div>
    <h3 className={styles.title}>{heading}</h3>
    <div className={styles.content} dangerouslySetInnerHTML={{__html: content}} />
  </div>
)
