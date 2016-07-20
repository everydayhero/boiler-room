import React from 'react'
import DocumentTitle from 'react-document-title'

import Icons from '../../components/Icons'
import Header from '../Header'
import Footer from '../Footer'

import styles from './styles.css'

export default ({
  children,
  title,
  charity,
  ...props
}) => (
  <DocumentTitle title={title}>
    <div className={styles.root}>
      <Icons />
      <Header { ...props } charity={charity} />
        {children}
      <Footer { ...props } />
    </div>
  </DocumentTitle>
)
