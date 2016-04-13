import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}></div>
)
