import { Link } from 'react-router'
import React from 'react'
import config from '../../../config/environment'
import styles from './styles.css'

const { client: { basePath } } = config

export default (props) => (
  <Link
    { ...props }
    className={styles.root}
    to={`${basePath}${props.to}`}
  />
)
