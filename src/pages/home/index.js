import React from 'react'
import { images } from '../../themes'
import './styles.css'
import paths from '../../routes/paths'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header className='App-header'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
