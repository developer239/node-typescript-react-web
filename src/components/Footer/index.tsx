import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer>
    <p>
      © 2019 Your Website | <Link to="/about">About</Link> | <Link to="/terms-of-use">Terms of use</Link>
    </p>
  </footer>
)

export default Footer
