import React, { PropTypes } from 'react'
import styles from './styles.css'

const Document = ({ title, description, content }) => (
  <html className={styles.html}>
    <head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta property='og:url' content='http://ifgirlsrantheworld.com' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/layouts/Hero/running-girl.jpg' />
      <link rel='icon' type='image/x-icon' href='/layouts/Document/favicon.ico' />
      <link rel='apple-touch-icon' href='/layouts/Document/favicon.png' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
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
      <script src="https://code.jquery.com/jquery-2.2.2.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.min.js" />
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
