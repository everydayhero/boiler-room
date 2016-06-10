import React from 'react'

import styles from './styles.css'

export default ({
  charities = {}
}) => (
  <div className={styles.root} id='register'>
    <h2 className={styles.title}>Choose a Charity & Register</h2>
    <p className={styles.intro}>Choose from one of our charity partners below and commit to a distance and fundraising goal.  Then invite your friends to join you and get ready to run the world.</p>
    <ul className={styles.primaryList}>
      {charities.primary.map((charity, i) => (
        <li className={styles.primaryItem} key={i}>
          <a href={charity.link} className={styles.primaryLink}>
            <img src={charity.image} alt={charity.title} className={styles.image}/>
          </a>
        </li>
      ))}
    </ul>
  </div>
)
