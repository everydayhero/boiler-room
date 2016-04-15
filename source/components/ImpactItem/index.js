import React from 'react'

import styles from './styles.css'

export default ({
  amount,
  title,
  content,
  image,
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
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.main}>
        <div className={styles.amount}>${amount}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  )
}
