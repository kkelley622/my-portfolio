import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <li><Link to='/intro'>Intro</Link></li>
      <li><Link to='/languages'>Languages</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
    </nav>
  )
}

export default Navbar