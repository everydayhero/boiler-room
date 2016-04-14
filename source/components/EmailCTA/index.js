import React from 'react'

import styles from './styles.css'

export default ({
  title,
  label,
  placeholder,
  buttonText,
  desctiption
}) => (
  <div className={styles.root}>
    <h2 className={styles.title}>{title}</h2>
    <label className={styles.label}>{label}</label>
    <div className={styles.form}>
      <input type='email' className={styles.input} placeholder={placeholder} />
      <button className={styles.submit}>{buttonText}</button>
    </div>
    <p className={styles.description}>{desctiption}</p>
  </div>
)
