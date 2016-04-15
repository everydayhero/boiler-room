import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.footerContainer }>
        <p className={ styles.edh }>Fundraising powered by <img src="/layouts/Footer/EDH-Logo-Footer.png"/></p>
      <ul className={ styles.footerMenu }>
        <li className={ styles.footerListItem }><a href="https://everydayhero.com/au/terms/?no_redirect">Privacy Policy</a></li>
        <li className={ styles.footerListItem }><a href="https://everydayhero.com/au/terms/privacy/?no_redirect">Terms & Conditions</a></li>
      </ul>
    </div>
  </div>
)
