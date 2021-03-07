import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const BurguerMenu = ({ items }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderBurguerItems = () => (
    items.map((item, index) => (
      <Link
        key={index}
        to={item.path}
        className='marvelDefaultText menuItem'
        style={{ fontSize: 22, padding: '8px 0px 8px 0px' }}
        onClick={() => setSidebarOpen(false)}
      >
        {item.text}
      </Link>
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
        {sidebarOpen
          ? <FontAwesomeIcon
              style={{ alignSelf: 'center', fontSize: 26 }}
              color='#F0141E'
              icon={faTimes}
            />
          : <FontAwesomeIcon
              style={{ alignSelf: 'center', fontSize: 26 }}
              color='#F0141E'
              icon={faBars}
            />}
      </div>
    </div>
  )
  return sidebarOpen ? renderOpenedBurguer() : renderBurguerButton()
}
export default BurguerMenu
