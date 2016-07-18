import React, { Component } from 'react'

import styles from './styles.css'

export default class extends Component {
  constructor () {
    super()
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }
  handlePrevious () {
    this._scroller.scrollLeft = this._scroller.scrollLeft - (this._scroller.scrollWidth / this.props.items.length)
  }
  handleNext () {
    this._scroller.scrollLeft = this._scroller.scrollLeft + (this._scroller.scrollWidth / this.props.items.length)
  }
  render () {
    const {
      items,
      widthUnit = 'rem',
      itemWidth = '16',
      ItemComponent,
      ...props
    } = this.props
    return (
      <div {...props}
        className={styles.root}>
        <button className={styles.buttonPrevious}
          onClick={this.handlePrevious}
          title='Previous'>
          <svg className={styles.icon} viewBox='0 0 32 32'>
            <polyline points='20.3,5.4 9.7,16 20.1,26.5' />
          </svg>
        </button>
        <button className={styles.buttonNext}
          onClick={this.handleNext}
          title='Next'>
          <svg className={styles.icon} viewBox='0 0 32 32'>
            <polyline points='10.9,5.3 21.3,16.1 10.7,26.4' />
          </svg>
        </button>
        <div className={styles.scroller}
          style={{
            scrollSnapPointsX: `repeat(${itemWidth + widthUnit})`,
            WebkitScrollSnapPointsX: `repeat(${itemWidth + widthUnit})`,
            msScrollSnapPointsX: `repeat(${itemWidth + widthUnit})`
          }}
          ref={(c) => { this._scroller = c }}>
          <div className={styles.wrapper}
            style={{
              width: items.length * itemWidth + widthUnit
            }} >
            {items.map((item, i) => (
              <ItemComponent {...item} style={{width: itemWidth + widthUnit}} key={i} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
