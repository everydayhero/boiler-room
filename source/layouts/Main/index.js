import React from 'react'

import Icons from '../../components/Icons'
import Header from '../Header'
import Footer from '../Footer'

import styles from './styles.css'

export default ({
  children,
  ...props
}) => (
  <div className={styles.root}>
    <Icons />
    <Header { ...props } />
      {children}
    <Footer { ...props } />
  </div>
)
