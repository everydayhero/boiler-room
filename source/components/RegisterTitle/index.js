import React from 'react'

import styles from './styles.css'

export default (props) => (
  <div
    { ...props }
    className={styles.root}
  >
    <svg role='img' aria-label='[title + description]' className={styles.title} viewBox='0 0 564.6 64.6'>
      <polygon className={styles.st0} points='542.6,63 3.1,63 23.1,32.3 3.1,1.7 542.6,1.7 562.6,32.3 '/>
      <text transform='matrix(1 0 0 1 51.8252 41.6071)' className={styles.st1}>CHOOSE A CHARITY &amp; REGISTER</text>
    </svg>
  </div>
)
