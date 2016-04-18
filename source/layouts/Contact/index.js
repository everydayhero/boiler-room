import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} id='contact' className={styles.root}>
    <div className={styles.contact}>
      <h1 className={styles.title}>Get in Touch</h1>
      <ul>
        <li><a className={styles.link} href='mailto:hello@everydayhero.com'>
          hello@everydayhero.com
        </a></li>
      <li><a className={styles.link} href='tel:213-293-1133'>
           (213) 293-1133
        </a></li>
      </ul>
      {/* <p className={ styles.phone }>9209834729</p> */}
    </div>
  </div>
)
