import React, { PropTypes } from 'react'

import Main from '../Main'
import styles from './styles.css'

const Home = ({
  title = 'Frequently Asked Questions',
  faqs = []
}) => {
  const pageTitle = `${title} | If Girls Ran The World`
  return (
    <Main title={pageTitle}>
      <div className={styles.root}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        {faqs.map((faq, i) => (
          <div className={styles.faq} key={i}>
            <h2 className={styles.question}>{faq.question}</h2>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </Main>
  )
}

Home.propTypes = {
  title: PropTypes.string,
  faqs: PropTypes.array
}

export default Home
