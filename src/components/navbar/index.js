import React from 'react'
import { images } from '../../themes'
import { Link } from 'react-router-dom'

import paths from '../../routes/paths'
import { useWindowDimensions, getBreakpoints } from '../../functions/utils'
import BurguerMenu from './burguerMenu'
import './styles.scss'

const Navbar = () => {
  const { width } = useWindowDimensions()
  const { isMobile } = getBreakpoints(width)

  const menuItems = [
    { text: 'Quadrinhos', path: paths.homeComicsHash },
    { text: 'Personagens', path: paths.comics },
    { text: 'Minha lista', path: paths.home }
  ]

  const renderHashLink = item => (
    <a
      href={item.path}
      className='marvelDefaultText menuItem'
    >
      {item.text}
    </a>
  )
  const renderPageLink = item => (
    <Link
      to={item.path}
      className='marvelDefaultText menuItem'
    >
      {item.text}
    </Link>
  )

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
        {menuItems.map(item => (
          item.path === paths.homeComicsHash
            ? renderHashLink(item)
            : renderPageLink(item)
        ))}

      </div>
    </div>
  )

  return isMobile ? renderMobileNavBar() : renderDesktopNavBar()
}

export default Navbar
