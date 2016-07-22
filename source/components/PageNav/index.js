import React, { PropTypes } from 'react'

import NavLink from '../NavLink'
import PageSearchModal from 'edh-widgets/src/components/search/PageSearchModal'
import styles from './styles.css'

class PageNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navActive: false,
      pageSearchActive: false
    }
    this.handleNavToggle = this.handleNavToggle.bind(this)
  }

  handleNavToggle (e) {
    this.setState({
      navActive: !this.state.navActive
    })
  }

  render () {
    const {
      nav = {},
      registerLink = '/#register'
    } = this.props
    const {
      navActive
    } = this.state
    const navButtonClasses = navActive
      ? styles.navButtonActive
      : styles.navButton
    const navItemsClasses = navActive
      ? styles.navItemsActive
      : styles.navItems

    return (
      <div className={styles.root}>
        <div className={styles.contain}>
          <div className={styles.nav}>
            <button className={navButtonClasses}
              onClick={this.handleNavToggle}>
              MENU
            </button>
            <ul className={navItemsClasses}>
              {Object.keys(nav).map((item, key) => (
                <li className={styles.navItem} key={key}>
                  <NavLink activeStyle={{ opacity: '.8' }} className={styles.link} to={nav[item].link}>{nav[item].title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.cta}>
            <li className={styles.item}><button className={styles.linkDonate} onClick={() => (this.setState({ pageSearchActive: true }))}>Donate</button></li>
            <li className={styles.item}><NavLink className={styles.ctaLink} to='https://everydayhero.com/us/sign-in'>Login</NavLink></li>
            <li className={styles.item}><NavLink className={styles.button} to={registerLink}>Register</NavLink></li>
          </ul>
        </div>
        {this.state.pageSearchActive
          ? <PageSearchModal
            campaignUid='au-20211'
            country='us'
            i18n={{ title: 'Search for a supporter' }}
            renderIcon={false}
            onClose={() => { this.setState({ pageSearchActive: false }) }}
            />
          : null
        }
      </div>
    )
  }
}
PageNav.propTypes = {
  nav: PropTypes.object
}

export default PageNav
