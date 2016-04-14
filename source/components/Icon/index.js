import React from 'react'
import styles from './styles.css'

const Icon = ({
  name,
  ...props
}) => {
  const svgIcon = `<use xlink:href="#${name}" />`
  return (
    <div className={styles.root} {...props}>
      <svg dangerouslySetInnerHTML={{ __html: svgIcon }}
        className={styles.svg} />
    </div>
  )
}

export default Icon
