import React, { PropTypes } from 'react'

import styles from './styles.css'

const BringYourBff = ({
  image,
  title,
  subtitle,
  placeholder,
  uid = ''
}) => {
  const shareTitle = 'If Girls Ran The World'
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  const shareUrl = `${baseUrl}${process.env.BASE_PATH || '/'}${uid}`
  const emailBody = `${placeholder} Check out ${shareUrl}`
  const shareLinks = {
    email: `mailto:?subject=${shareTitle}&body=${emailBody}`,
    facebook: `http://www.facebook.com/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${placeholder}&url=${shareUrl}`
  }
  return (
    <div className={styles.root}>
      <div className={styles.imgWrap}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.contentWrap}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.share}>
          <div className={styles.buttons}>
            <a href={shareLinks.email} className={styles.button}>Email</a>
            <a href={shareLinks.twitter} target='_blank' className={styles.button}>Twitter</a>
            <a href={shareLinks.facebook} target='_blank' className={styles.button}>Facebook</a>
          </div>
        </div>
      </div>
    </div>
  )
}

BringYourBff.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  placeholder: PropTypes.string,
  uid: PropTypes.string
}

export default BringYourBff
