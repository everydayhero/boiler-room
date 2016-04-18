import React, { PropTypes } from 'react'
import styles from './styles.css'

const Document = ({ title, description, content }) => (
  <html className={styles.html}>
    <head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-shim.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-sham.min.js' />
      <link rel='stylesheet' href='/vendor.css' />
      <link rel='stylesheet' href='/main.css' />
    </head>
    <body className={styles.body}>
      <main
        id='mount'
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <script src='/main.js' />
    </body>
  </html>
)

Document.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string
}

export default Document
