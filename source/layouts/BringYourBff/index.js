import React, { Component, PropTypes } from 'react'
import Textarea from 'react-textarea-autosize'

import styles from './styles.css'

class BringYourBff extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      shareMessage: props.placeholder
    }
  }
  handleChange (e) {
    this.setState({
      shareMessage: e.target.value
    })
  }
  render () {
    const {
      title,
      subtitle
    } = this.props
    const {
      shareMessage
    } = this.state
    const shareTitle = encodeURIComponent('If Girls Ran The World')
    const shareUrl = encodeURIComponent('http://ifgirlsrantheworld.com')
    const emailBody = encodeURIComponent(`${shareMessage}\r\n${shareUrl}`)
    const shareLinks = {
      email: `mailto:?subject=${shareTitle}&body=${emailBody}`,
      facebook: `http://www.facebook.com/sharer.php?u=${shareUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${shareMessage}&url=${shareUrl}`
    }
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.share}>
          <Textarea
            className={styles.input}
            maxRows={7}
            onChange={this.handleChange}
            value={shareMessage} />
          <div className={styles.buttons}>
            <a href={shareLinks.email} className={styles.button}>Email</a>
            <a href={shareLinks.twitter} target='_blank' className={styles.button}>Twitter</a>
            <a href={shareLinks.facebook} target='_blank' className={styles.button}>Facebook</a>
          </div>
        </div>
      </div>
    )
  }
}

BringYourBff.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  placeholder: PropTypes.string
}

export default BringYourBff
