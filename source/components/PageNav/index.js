import React from 'react'

import NavLink from '../NavLink'
import styles from './styles.css'

import nav from '../../content/nav.json'

export default () => (
  <ul className={styles.root}>
    {Object.keys(nav).map((item, key) => (
      <li className={styles.item} key={key}>
        <NavLink to={nav[item].link}>{nav[item].title}</NavLink>
      </li>
    ))}
  </ul>
)
