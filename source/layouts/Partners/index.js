import React from 'react'

import styles from './styles.css'

export default ({
  heading = 'Our Partners',
  partners,
  ...props
}) => (
  <div {...props} className={styles.root}>
    <h2 className={styles.title}>{heading}</h2>
    <ul className={styles.list}>
      {partners.map((partner, i) => (
        <li className={styles.item} key={i}>
          <a href={partner.link}>
            <img className={styles.image} src={partner.image.url} alt={partner.title} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)
