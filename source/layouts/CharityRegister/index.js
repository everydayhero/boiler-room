import React from 'react'

import ArrowTitle from '../../components/ArrowTitle'
import styles from './styles.css'

export default ({
  eventLink,
  lead = 'Register, then invite your friends to join you and get ready to run the world.'
}) => (
  <div className={styles.root} id='register'>
    <ArrowTitle heading='Register' />
    <p className={styles.intro}>{lead}</p>
    <a className={styles.eventLink} href={eventLink}>Register Now</a>
  </div>
)
