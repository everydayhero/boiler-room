import React, { PropTypes } from 'react'

import NavLink from '../NavLink'
import styles from './styles.css'

const PageNav = ({
  nav
}) => (
  <ul className={styles.root}>
    {Object.keys(nav).map((item, key) => (
      <li className={styles.item} key={key}>
        <NavLink to={nav[item].link}>{nav[item].title}</NavLink>
      </li>
    ))}
  </ul>
)

PageNav.propTypes = {
  nav: PropTypes.object
}

export default PageNav
