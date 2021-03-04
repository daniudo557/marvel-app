import React from 'react'
import { images, breakpoints } from '../../themes'
import { Link } from 'react-router-dom'

import paths from '../../routes/paths'
import { useWindowDimensions } from '../../functions/utils'
import './styles.css'

const Navbar = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= breakpoints.md
  const renderMobileNavBar = () => (
    <div className='navBar' style={{ height: 32 }}>
      <div className='marvelLogoMobile'>
        <Link to={paths.home} style={{ textDecoration: 'none' }}>
          <p className='logoText'>M</p>
        </Link>
      </div>
    </div>
  )

  const renderDesktopNavBar = () => (
    <div className='navBar'>
      <Link to={paths.home} style={{ textDecoration: 'none' }}>
        <img src={images.logo} className='marvelLogo' alt='logo' />
      </Link>
    </div>
  )

  return isMobile ? renderMobileNavBar() : renderDesktopNavBar()
}

export default Navbar
