import React from 'react'

import styles from './styles.css'

export default ({
  partners,
  ...props
}) => (
  <div {...props} className={styles.root}>
    <h2 className={styles.title}>Our Partners</h2>
    <ul className={styles.list}>
      {partners.map((partner, i) => (
        <li className={styles.item} key={i}>
          <a href={partner.link} target='_blank'>
            <img className={styles.image} src={partner.image} alt={partner.title} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)
