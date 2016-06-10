import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} id='about' className={styles.root}>
    <p>Run. Share. Raise. Repeat.</p>
  </div>
)
