import { Link } from 'react-router'
import React from 'react'
import config from '../../../config/environment'
import styles from './styles.css'

const { client: { basePath } } = config

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
      to={`${basePath}${to}`}/>
    )
}
