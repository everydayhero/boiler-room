import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.contact }>
      <h1 className={ styles.title }>Get in Touch</h1>
      <p className={ styles.email }>help@everydayhero.com</p>
      {/*<p className={ styles.phone }>9209834729</p>*/}
    </div>
  </div>
)
