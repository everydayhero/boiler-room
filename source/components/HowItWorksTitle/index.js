import React from 'react'

import styles from './styles.css'

export default ({
  text = 'How it Works',
  ...props
}) => (
  <div
    { ...props }
    className={styles.root}
  >
    <svg role='img' aria-label='[title + description]' className={styles.hiwTitle} viewBox='0 0 322.6 64.6'>
      <polygon className={styles.st0} points='300.6,63 3.1,63 23.1,32.3 3.1,1.7 300.6,1.7 320.6,32.3 '/>
      <text transform='matrix(1 0 0 1 51.8478 40.6421)' className={styles.st1}>{text}</text>
    </svg>
  </div>
)
