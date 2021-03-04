import React from 'react'
import { images, breakpoints } from '../../themes'
import { Link } from 'react-router-dom'

import paths from '../../routes/paths'
import { useWindowDimensions } from '../../functions/utils'
import './styles.css'

const Home = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= breakpoints.md
  return (
    <>
      <header className='App-header'>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
          <img src={images.header} className='slide-right App-logo' alt='logo' />
          <p className='appear' style={{ alignSelf: 'center', maxWidth: 500 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <Link to={paths.comics}>
          Comics
        </Link>
      </header>
      <section style={{ backgroundColor: 'red', height: 500 }}>
        Secion
      </section>
    </>
  )
}

export default Home
