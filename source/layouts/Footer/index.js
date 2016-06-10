import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={styles.footerContainer}>
      <p className={styles.edh}>
        <span>Fundraising powered by</span>
        <img className={styles.edhLogo} src='/layouts/Footer/EDH-logo.svg'/>
      </p>
      <ul className={styles.footerMenu}>
        <li className={styles.footerListItem}>
          <a className={styles.link} href='https://everydayhero.com/us/terms/privacy/?no_redirect'>Privacy Policy</a>
        </li>
        <li className={styles.footerListItem}>
          <a className={styles.link} href='https://everydayhero.com/us/terms/?no_redirect'>Terms & Conditions</a>
        </li>
        <li className={styles.footerListItem}>
          <a className={styles.link} href='mailto:hello@everydayhero.com'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
)
