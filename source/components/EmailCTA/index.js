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
    <form className={styles.form}>
      <input type='email' className={styles.input} placeholder={placeholder} />
      <div className={styles.formButton}>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </form>
    <p className={styles.description}>{desctiption}</p>
  </div>
)
