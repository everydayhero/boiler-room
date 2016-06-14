import React from 'react'

import RegisterTitle from '../../components/RegisterTitle'
import styles from './styles.css'

export default ({
  charities = {}
}) => (
  <div className={styles.root} id='register'>
    <RegisterTitle />
    <p className={styles.intro}>Choose from one of our charity partners below and set a distance and fundraising goal. Then invite your friends to join you and get ready to run the world.</p>
    <ul className={styles.primaryList}>
      {charities.primary.map((charity, i) => (
        <li className={styles.primaryItem} key={i}>
          <a href={charity.link} className={styles.primaryLink}>
            <img src={charity.image} alt={charity.title} className={styles.image}/>
          </a>
        </li>
      ))}
    </ul>
    <div className={styles.footerText}>
      <h3 className={styles.footerTitle}>Don't see the cause that’s closest to your heart?</h3>
      <p><a href='https://ifgirlsrantheworld.eventbrite.com'>Register here</a> and then search for the cause that means the most to you. Still can’t find your cause?  Email us at <a href='mailto:hello@everydayhero.com'>hello@everydayhero.com</a></p>
    </div>
  </div>
)
