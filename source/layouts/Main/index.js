import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import styles from './styles.css'

export default (props) => (
  <article className={styles.Main}>
    <Header { ...props } />
    {props.children}
    <Footer { ...props } />
  </article>
)
