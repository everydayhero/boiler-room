import React from 'react'

import PageNav from '../../components/PageNav'
import Hero from '../Hero'
import styles from './styles.css'

export default () => (
  <header className={styles.root}>
    <PageNav />
    <Hero />
  </header>
)
