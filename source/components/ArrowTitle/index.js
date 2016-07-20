import React from 'react'

import styles from './styles.css'

export default ({
  heading = 'Choose a Charity & Register',
  ...props
}) => (
  <div
    {...props}
    className={styles.root}
  >
    <div className={styles.title}>{heading}</div>
  </div>
)
