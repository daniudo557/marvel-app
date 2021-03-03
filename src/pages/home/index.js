import React from 'react'
import logo from '../../logo.svg'
import './styles.css'
import paths from '../../routes/paths'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header className='App-header'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img src={logo} className='App-logo' alt='logo' />
          <p style={{ alignSelf: 'center', maxWidth: 500 }}>
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
