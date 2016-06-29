import React from 'react'
import styles from './styles.css'
import createSocialFeed from '../../jquery.socialfeed.js'
import Codebird from 'codebird'


export default class extends React.Component {
  componentDidMount () {
    if (typeof $ !== 'undefined') {
      createSocialFeed($, window, document, Codebird)
      $(document).ready(function () {
        $('.social-slides').socialfeed({
          // INSTAGRAM
          instagram: {
            accounts: ['&3210007659'],
            limit: 6,
            user_id: 3210007659,
            client_id: 'fe38eded758e4259b5df0583fc509293',
            access_token: '3210007659.1677ed0.f33efaca3b274ba9b17c6ec2451d85e5'
          },

          // FACEBOOK
          facebook: {
            accounts: ['@ifgirlsrantheworld'],
            limit: 6,
            access_token: '101663860262404|38ab6853b1d65b27b9500dbeb9ccaec5'
          },

          // TWITTER
          twitter: {
            accounts: ['@ifgirlsranworld', '#ifgirlsranworld'],
            limit: 6,
            consumer_key: 'qqt2l8cISaxtOxJmb9CPCMHim',
            consumer_secret: 'VYLXujP4VYzN82u0hQFcqEuKgkdNjCChRKM8Md8vuXLbbMs2Nz'
          },

          // GENERAL SETTINGS
          length: 160,
          show_media: true,
          media_min_width: 100,
          touch: true,
          update_period: 360000,
          template_html: `
            <li class="social-feed-element {{? !it.moderation_passed}}hidden{{?}}" dt-create="{{=it.dt_create}}" social-feed-id="{{=it.id}}">
              <div class="social-image">{{=it.attachment}}</div>
              <p class="social-icon">
                <i class="fa fa-\{{=it.social_network}}"></i>
              </p>
              <div class='content'>
                <div class="media-body">
                  <div class='text-wrapper'>
                    <p class="social-feed-text">{{=it.text}} <a href="{{=it.link}}" target="_blank" class="read-button">read more</a></p>
                  </div>
                  <span class="author-title \{{=it.social_network}}">\{{=it.author_name}}</span><br/>
                  <span class="post-time"> {{=it.time_ago}}</span>
                </div>
              </div>
            </li>
          `
        })
      })
    }
  }

  render () {
    return (
      <div className={styles.base}>
        <div className={styles.socialHeader}>
          <h2 className={styles.title}>#ifgirlsrantheworld</h2>
        </div>
        <div className={styles.social}>
          <ul className='social-slides'/>
        </div>
      </div>
    )
  }
}
