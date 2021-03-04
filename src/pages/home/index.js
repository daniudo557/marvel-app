import React from 'react'
import { images, breakpoints } from '../../themes'
import { Link } from 'react-router-dom'

import { useWindowDimensions } from '../../functions/utils'
import paths from '../../routes/paths'
import './styles.css'

const Home = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= breakpoints.md

  return (
    <>
      <div className='backgroundImgContainer'>
        <div
          className='backgroundImg'
          style={{ backgroundImage: `url(${images.headerBackground})` }}
        />
      </div>
      <header className='App-header'>
        <div className={isMobile ? 'welcome-section-container-mobile' : 'welcome-section-container'}>
          <img src={images.header} className='slide-right animated-image' alt='logo' />
          <p className='appear' style={{ alignSelf: 'center', maxWidth: 500 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </header>
      <section style={{ backgroundColor: 'red', height: 500 }}>
        Secion
      </section>
    </>
  )
}

export default Home
