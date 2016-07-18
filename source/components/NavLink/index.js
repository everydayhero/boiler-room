import { Link } from 'react-router'
import React from 'react'
import styles from './styles.css'

export default ({
  to,
  ...props
}) => {
  // Allow on page hash links to use the default anchor
  return (to.indexOf('#') === 0)
    ? <a {...props} href={to} className={styles.root} />
    : (<Link
      {...props}
      className={styles.root}
      to={`${process.env.BASE_URL || ''}${to}`} />
    )
}
