import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} id='contact' className={styles.root}>
    <div className={styles.contact}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p><a className={styles.email} href='mailto:hello@everydayhero.com'>
        hello@everydayhero.com
      </a></p>
      {/* <p className={ styles.phone }>9209834729</p> */}
    </div>
  </div>
)
