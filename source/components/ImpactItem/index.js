import React from 'react'

import styles from './styles.css'

export default ({
  dollars = '',
  heading = '',
  content = '',
  image = {},
  active,
  alternate
}) => {
  const classes = [
    alternate ? styles.rootAlternate : styles.root,
    !active && 'hideSmall'
  ].join(' ')
  return (
    <div className={classes}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image.url} alt={heading} />
      </div>
      <div className={styles.main}>
        <div className={styles.amount}>${dollars}</div>
        <h3 className={styles.title}>{heading}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  )
}
