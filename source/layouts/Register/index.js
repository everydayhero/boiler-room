import React from 'react'

import RegisterTitle from '../../components/RegisterTitle'
import styles from './styles.css'

export default ({
  heading,
  lead,
  footer,
  charities = {}
}) => (
  <div className={styles.root} id='register'>
    <RegisterTitle heading={heading} />
    <p className={styles.intro}>{lead}</p>
    <ul className={styles.primaryList}>
      {charities.primary.map((charity, i) => (
        <li className={styles.primaryItem} key={i}>
          <a href={charity.link} className={styles.primaryLink}>
            <img src={charity.image} alt={charity.title} className={styles.image}/>
          </a>
        </li>
      ))}
    </ul>
    <div className={styles.footer} dangerouslySetInnerHTML={{__html: footer}} />
  </div>
)
