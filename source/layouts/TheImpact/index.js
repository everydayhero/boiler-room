import React, { Component } from 'react'

import ImpactItem from '../../components/ImpactItem'
import styles from './styles.css'

class TheImpact extends Component {
  constructor () {
    super()
    this.handleTabChange = this.handleTabChange.bind(this)
    this.state = {
      activeTab: 1
    }
  }
  handleTabChange (key) {
    this.setState({
      activeTab: key + 1
    })
  }
  render () {
    const {
      heading,
      lead,
      items,
      quote,
      cite
    } = this.props
    const {
      activeTab
    } = this.state
    return (
      <div className={styles.root} id='the-impact'>
        <div className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <p>{lead}</p>
        </div>
        <div>
          <ul className={styles.tabs}>
            {items.map((item, key) => (
              <li className={styles.tabItem} key={key}>
                <button
                  onClick={this.handleTabChange.bind(this, key)}
                  className={(activeTab === (key + 1))
                    ? styles.tabButtonActive : styles.tabButton}>
                  ${item.amount}
                </button>
              </li>
            ))}
          </ul>
          <div>
            {items.map((item, key) => (
              <ImpactItem {...item}
                alternate={key % 2 === 0}
                active={activeTab === (key + 1)}
                key={key} />
            ))}
          </div>
        </div>
        <blockquote className={styles.quote}>
          <div className={styles.quoteText}>{quote.text}</div>
          <div className={styles.quoteCite}>{quote.cite}</div>
        </blockquote>
      </div>
    )
  }
}

export default TheImpact
