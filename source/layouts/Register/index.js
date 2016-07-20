import React from 'react'

import ArrowTitle from '../../components/ArrowTitle'
import styles from './styles.css'

export default ({
  heading,
  lead,
  footer,
  charities = {}
}) => (
  <div className={styles.root} id='register'>
    <ArrowTitle heading={heading} />
    <p className={styles.intro}>{lead}</p>
    <ul className={styles.primaryList}>
      {charities.primary.map((charity, i) => (
        <li className={styles.primaryItem} key={i}>
          <a href={charity.link} target='_blank' className={styles.primaryLink}>
            <img src={charity.image} alt={charity.title} className={styles.image} />
          </a>
        </li>
      ))}
    </ul>
    <div className={styles.footer} dangerouslySetInnerHTML={{__html: footer}} />
  </div>
)
