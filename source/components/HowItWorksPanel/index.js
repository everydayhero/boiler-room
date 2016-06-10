import React from 'react'

import Icon from '../Icon'
import styles from './styles.css'

export default ({
  icon,
  title,
  content,
  link,
  invert,
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={invert ? styles.iconInverted : styles.icon}>
      <Icon name={icon} />
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.content}>{content}</p>
    <p className={styles.content} dangerouslySetInnerHTML={{__html: link}} />
  </div>
)
