import React from 'react'
import Slider from 'react-slick'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.hiwSlider }>
      <h1 className={ styles.title }>HOW IT WORKS</h1>
        <Slider
          dots={ true }
          ininite={ false }
          speed={ 300 }
          slidesToShow={ 4 }
          slidesToScroll={ 1 }
        >

          <div className={ styles.hiwItems }>
            <div className={ styles.hiwIcons }><img src="/layouts/HowItWorks/register-icon.png" alt="Register" /></div>
            <h4 className={ styles.hiwSubHeading }>REGISTER</h4>
            <div className={ styles.hiwContent }>
              <p>Choose a cause and commit to a running and fundraising goal. Receive your World Famous welcome kit. Smile and get ready for your adventure.</p>
            </div>
          </div>

          <div className={ styles.hiwItems }>
            <div className={ styles.hiwIcons }><img src="/layouts/HowItWorks/connect-icon.png" alt="Connect" /></div>
            <h4 className={ styles.hiwSubHeading }>CONNECT</h4>
            <div className={ styles.hiwContent }>
              <p>Connect your fitness app so you can see all that you’re giving. Track your distance, time, and calories burned. And, know that your individual effort adds to our collective progress.</p>
            </div>
          </div>

          <div className={ styles.hiwItems }>
            <div className={ styles.hiwIcons }><img src="/layouts/HowItWorks/fundraise-icon.png" alt="Fundraise" /></div>
            <h4 className={ styles.hiwSubHeading }>FUNDRAISE</h4>
            <div className={ styles.hiwContent }>
              <p>Update your supporter page and share it with friends, family, and social network to raise funds for your cause. The funds your raise empower girls around the world.</p>
            </div>
          </div>

          <div className={ styles.hiwItems }>
            <div className={ styles.hiwIcons }><img src="/layouts/HowItWorks/run-icon.png" alt="Run" /></div>
            <h4 className={ styles.hiwSubHeading }>RUN</h4>
            <div className={ styles.hiwContent }>
            <p><span className={ styles.hiwBold }>From October 1 – 31</span>, get out and run. Run daily to win cool prizes and unlock fun rewards. Share your runs on social to build awareness for your cause and inspire others to join the movement.</p>
            </div>
          </div>

        </Slider>
      </div>
  </div>
)
