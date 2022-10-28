import React from 'react'
import "./NotFound.css"
import {Link} from 'react-router-dom'

 const NotFound = () => {
  return (
    <section className='error'>
      <h1 className='error--title'>404</h1>
      <h4>Page Not Found</h4>
      <p className='error--text'>the page you are looking for does not seem to exist</p>
      <button className='error-btn'><Link to="/" className='error--link'>Go Back to Home</Link></button>
      </section>
  )
}

export default NotFound