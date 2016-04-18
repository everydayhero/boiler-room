import React from 'react'

import styles from './styles.css'

export default ({
  title,
  label,
  placeholder,
  buttonText,
  description,
  descriptionHighlight
}) => (
  <div className={styles.root}>
    <h2 className={styles.title}>{title}</h2>
    <form className={styles.form}
      action='//everydayhero.us11.list-manage.com/subscribe/post?u=a0da4028ac83765225d98a490&amp;id=61270ba844'
      method='post'
      id='mc-embedded-subscribe-form'
      name='mc-embedded-subscribe-form'
      target='_blank'
      noValidate>
      <label htmlFor='mce-EMAIL' className={styles.label}>{label}</label>
      <input type='email'
        name='EMAIL'
        id='mce-EMAIL'
        className={styles.input}
        placeholder={placeholder} />
      <div style={{position: 'absolute', left: '-5000px'}} ariaHidden='true'>
        <input type='text'
          name='b_a0da4028ac83765225d98a490_61270ba844'
          tabIndex='-1'
          value='' />
      </div>
      <div className={styles.formButton}>
        <input type='submit'
          value={buttonText}
          name='subscribe'
          id='mc-embedded-subscribe'
          className={styles.button} />
      </div>
    </form>
    <p className={styles.description}>{description} <span className={styles.descriptionHighlight}>{descriptionHighlight}</span></p>
  </div>
)
