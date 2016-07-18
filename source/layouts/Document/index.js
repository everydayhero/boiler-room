import React, { PropTypes } from 'react'
import styles from './styles.css'

const Document = ({
  title,
  description,
  content,
  state = {}
}) => (
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
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css' />
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
      <script
        id='initial-state'
        type='application/json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(state)
        }}
      />
      <script src='https://code.jquery.com/jquery-2.2.2.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.min.js' />
      <script src='/main.js' />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-77699721-1', 'auto');
            ga('send', 'pageview');`
        }}
        />
      <script async src='https://www.google-analytics.com/analytics.js'></script>

      <noscript><iframe src='//www.googletagmanager.com/ns.html?id=GTM-PN6K34' height='0' width='0' style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PN6K34');`
        }}
      />
    </body>
  </html>
)

Document.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  state: PropTypes.object
}

export default Document
