import React, { PropTypes } from 'react'

import NavLink from '../NavLink'
import styles from './styles.css'

const PageNav = ({
  nav
}) => (
  <div className={styles.root}>
    <div className={styles.contain}>
      <ul className={styles.nav}>
        {Object.keys(nav).map((item, key) => (
          <li className={styles.item} key={key}>
            <NavLink to={nav[item].link}>{nav[item].title}</NavLink>
          </li>
        ))}
      </ul>
      <ul className={styles.cta}>
        <li className={styles.item}><a className={styles.link} href=''>Donate</a></li>
        <li className={styles.item}><a className={styles.link} href=''>Login</a></li>
        <li className={styles.item}><a className={styles.button} href=''>Register</a></li>
      </ul>
    </div>
  </div>
)

PageNav.propTypes = {
  nav: PropTypes.object
}

export default PageNav
