import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.byff }>
      <h1 className={ styles.title }>BRING YOUR BFF</h1>
        <h4 className={ styles.subTitle }>Because everything is better with friends.</h4>
        <p>Dear Bestie, Together we can run the world. Look at this awesome event I found. Let’s sign up together.</p>
        <p>Button</p>
    </div>
  </div>
)
