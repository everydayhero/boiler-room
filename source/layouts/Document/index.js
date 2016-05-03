import React, { PropTypes } from 'react'
import styles from './styles.css'

const Document = ({ title, description, content }) => (
  <html className={styles.html}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <meta property='og:url' content='http://ifgirlsrantheworld.com' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/layouts/Hero/running-girl.jpg' />
      <link rel='icon' type='image/x-icon' href='/layouts/Document/favicon.ico' />
      <link rel='apple-touch-icon' href='/layouts/Document/favicon.png' />
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
