import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <blockquote className={styles.heroQuote}>
      <div className={styles.quote}>When you empower a girl or a woman, she becomes a catalyst for positive change whose success benefits everyone around her.</div>
      <div className={styles.author}>care.org</div>
    </blockquote>
  </div>
)
