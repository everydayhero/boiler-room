import React, { PropTypes } from 'react'

import styles from './styles.css'

const ScrollingHeading = ({
  headings,
  ...props
}) => (
  <div {...props} className={styles.root}>
    {headings.map((heading, key) => (
      <p key={key} className={styles[`heading-${key + 1}`]}>
        {heading[0]}<br /><strong>{heading[1]}</strong>
      </p>
    ))}
  </div>
)

ScrollingHeading.propTypes = {
  headings: PropTypes.array.isRequired
}

export default ScrollingHeading
