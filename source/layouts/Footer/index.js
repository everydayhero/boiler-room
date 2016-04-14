import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.footerContainer }>
        <p>Fundraising powered by</p>
        <img src=""/>
      <ul className={ styles.footerMenu }>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
  </div>
)
