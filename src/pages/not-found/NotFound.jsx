import React from 'react'
import { NotFoundStyles } from './NotFound.styles'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <NotFoundStyles><h1>Page NotFound:)</h1><Link>Back to home <i class="fa-solid fa-left-long"></i></Link></NotFoundStyles>
  )
}

export default NotFound