import { Link } from 'react-router'
import React from 'react'

export default (props) => (
  <Link
    { ...props }
    to={`${process.env.BASE_PATH || ''}${props.to}`}
  />
)
