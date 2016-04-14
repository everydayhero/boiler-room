import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.email }>
      <h1 className={ styles.title }>JOIN THE MOVEMENT</h1>
        <div className={ styles.emailForm }>
          <div className={ styles.emailText }>Enter your email</div>
          <div className={ styles.emailButton }>NOTIFY ME</div>
        </div>
        <div className={ styles.emailSubTitle }>Sign up to get early access to registration</div>
    </div>
  </div>
)
