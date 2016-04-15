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
      title,
      intro,
      cards,
      quote
    } = this.props
    const {
      activeTab
    } = this.state
    return (
      <div className={styles.root} id='the-impact'>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p>{intro}</p>
        </div>
        <div>
          <ul className={styles.tabs}>
            {cards.map((card, key) => (
              <li className={styles.tabItem} key={key}>
                <button
                  onClick={this.handleTabChange.bind(this, key)}
                  className={(activeTab === (key + 1))
                    ? styles.tabButtonActive : styles.tabButton}>
                  ${card.amount}
                </button>
              </li>
            ))}
          </ul>
          <div>
            {cards.map((card, key) => (
              <ImpactItem {...card}
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
