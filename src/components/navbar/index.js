import React from 'react'
import { images, breakpoints } from '../../themes'
import { Link } from 'react-router-dom'

import paths from '../../routes/paths'
import { useWindowDimensions } from '../../functions/utils'
import BurguerMenu from './burguerMenu'
import './styles.scss'

const Navbar = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= breakpoints.md
  const menuItems = [
    { text: 'Quadrinhos', path: paths.home },
    { text: 'Personagens', path: paths.comics },
    { text: 'Minha lista', path: paths.home }
  ]

  const renderMobileNavBar = () => (
    <div className='navBar navBar-mobile'>
      <div className='marvelLogo marvelLogo-mobile'>
        <Link
          className='marvelDefaultText'
          style={{ paddingRight: 8, paddingLeft: 8 }}
          to={paths.home}
        >
          M
        </Link>
      </div>
      <BurguerMenu items={menuItems} />
    </div>
  )

  const renderDesktopNavBar = () => (
    <div className='navBar'>
      <Link
        style={{ height: '100%' }}
        to={paths.home}
      >
        <img src={images.logo} className='marvelLogo' alt='logo' />
      </Link>
      <div className='menuLine'>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            className='marvelDefaultText menuItem'
            key={index}
          >
            {item.text}
          </Link>
        ))}

      </div>
    </div>
  )

  return isMobile ? renderMobileNavBar() : renderDesktopNavBar()
}

export default Navbar
