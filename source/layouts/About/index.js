import React from 'react'

import styles from './styles.css'

export default ({
  heading = 'About',
  content = '',
  image = {},
  ...props
}) => (
  <div {...props} id='about' className={styles.root}>
    <h2 className={styles.title}>{heading}</h2>
    <div className={styles.body}>
      <div className={styles.content}
        dangerouslySetInnerHTML={{__html: content}} />
      <div className={styles.image}>
        <div className={styles.aboutLogo}>
          <img src={image.url} alt='Track Your Miles' />
        </div>
      </div>
    </div>
  </div>
)
