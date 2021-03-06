import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import paths from '../../routes/paths'
import './styles.scss'

const BurguerMenu = ({ items }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderHashLink = item => (
    <a
      href={item.path}
      className='marvelDefaultText menuItem'
      style={{ fontSize: 22, padding: '8px 0px 8px 0px' }}
      onClick={() => setSidebarOpen(false)}
    >
      {item.text}
    </a>
  )
  const renderPageLink = item => (
    <Link
      to={item.path}
      className='marvelDefaultText menuItem'
      style={{ fontSize: 22, padding: '8px 0px 8px 0px' }}
      onClick={() => setSidebarOpen(false)}
    >
      {item.text}
    </Link>
  )

  const renderBurguerItems = () => (
    items.map(item => (
      item.path === paths.homeComicsHash
        ? renderHashLink(item)
        : renderPageLink(item)
    ))
  )

  const renderOpenedBurguer = () => (
    <div className='sideBarMenu'>
      {renderBurguerButton()}
      {renderBurguerItems()}
    </div>
  )

  const renderBurguerButton = () => (
    <div className='burgerButtonContainer'>
      <div
        className='burgerButton'
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? 'X' : '|||'}
      </div>
    </div>
  )
  return sidebarOpen ? renderOpenedBurguer() : renderBurguerButton()
}
export default BurguerMenu
