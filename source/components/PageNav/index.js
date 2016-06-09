import React, { PropTypes } from 'react'

import NavLink from '../NavLink'
import styles from './styles.css'

const PageNav = ({
  nav
}) => (
  <div className={styles.root}>
    <ul className={styles.mainNav}>
      {Object.keys(nav).map((item, key) => (
        <li className={styles.item} key={key}>
          <NavLink to={nav[item].link}>{nav[item].title}</NavLink>
        </li>
      ))}
    </ul>
    <ul className={styles.menuButtons}>
      <li className={styles.btnItem}><a className={styles.btnFill} href="">Register</a></li>
      <li className={styles.btnItem}><a className={styles.btnFill} href="">Donate</a></li>
      <li className={styles.btnItem}><a className={styles.btnOutline} href="">Login</a></li>
    </ul>
  </div>
)

PageNav.propTypes = {
  nav: PropTypes.object
}

export default PageNav
