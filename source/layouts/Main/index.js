import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import styles from './styles.css'

export default ({
  children,
  ...props
}) => (
  <div className={styles.root}>
    <Header { ...props } />
      {children}
    <Footer { ...props } />
  </div>
)
