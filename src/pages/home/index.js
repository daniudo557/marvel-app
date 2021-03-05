import React, { useState, useEffect } from 'react'

import { images, breakpoints } from '../../themes'
import { useWindowDimensions } from '../../functions/utils'
import CustomCarousel from '../../components/customCarousel'
import API from '../../services/api'
import './styles.scss'

const Home = () => {
  const { width } = useWindowDimensions()
  const [comics, setComics] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    API.getComics().then(({ data }) => {
      setComics(data.data.results)
    })
  }, [])

  useEffect(() => {
    API.getCharacters().then(({ data }) => {
      setCharacters(data.data.results)
    })
  }, [])

  useEffect(() => {
    API.getCharacters2().then(({ data }) => {
      console.log(data)
    })
  }, [])

  console.log(comics)
  console.log(characters)

  const isDesktop = width > breakpoints.md
  const isTablet = width > breakpoints.sm && width <= breakpoints.md
  const isMobile = width <= breakpoints.sm

  const welcomeSectionContainerDesktopClass = 'welcomeSectionContainer'
  const welcomeSectionContainerTabletClass = 'welcomeSectionContainer-tablet'
  const welcomeSectionContainerMobileClass = 'welcomeSectionContainer-mobile'

  const getwelcomeSectionContainerClass = () => {
    if (isDesktop) return welcomeSectionContainerDesktopClass
    else if (isTablet) return welcomeSectionContainerTabletClass
    else if (isMobile) return welcomeSectionContainerMobileClass
  }

  const welcomeSectionTxtDesktopClass = 'welcomeSectionTxt'
  const welcomeSectionTxtTabletClass = 'welcomeSectionTxt-tablet'
  const welcomeSectionTxtMobileClass = 'welcomeSectionTxt-mobile'

  const getWelcomeSectionTxtClass = () => {
    if (isDesktop) return welcomeSectionTxtDesktopClass
    else if (isTablet) return welcomeSectionTxtTabletClass
    else if (isMobile) return welcomeSectionTxtMobileClass
  }

  return (
    <>
      <div className='backgroundImgContainer'>
        <div
          className='backgroundImg'
          style={{ backgroundImage: `url(${images.headerBackground})` }}
        />
      </div>
      <section className='welcomeSection'>
        <div className={getwelcomeSectionContainerClass()}>
          <img
            src={images.header}
            alt='logo'
            className={`animatedImgSlideRight 
            ${isDesktop ? 'animatedImg' : 'animatedImg-tablet'}`}
          />
          <div
            className={`welcomeSectionTxtAppear ${getWelcomeSectionTxtClass()}`}
          >
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 256, backgroundColor: '#F5F5F5', display: 'flex', flexDirection: 'column' }}>
        <CustomCarousel isMobile={isTablet} items={comics} />
      </section>
      <section style={{ height: 500 }} />
    </>
  )
}

export default Home
