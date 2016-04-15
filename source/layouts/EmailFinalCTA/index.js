import React from 'react'

import styles from './styles.css'
import EmailCTA from '../../components/EmailCTA'

export default ({
  email
}) => (
  <div className={styles.root}>
    <div className={styles.email}>
      <EmailCTA {...email}/>
    </div>
  </div>
)