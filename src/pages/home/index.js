import React, { useState, useEffect } from 'react'

import { images, breakpoints } from '../../themes'
import { useWindowDimensions } from '../../functions/utils'

import API from '../../services/api'
import './styles.scss'

import Section from '../../components/section'
import CustomCarousel from '../../components/customCarousel'
import CarouselItem from '../../components/carouselItem'

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

  const renderCarousel = () => (
    <CustomCarousel isMobile={isTablet}>
      {comics.map((comic, index) => (
        <CarouselItem
          key={index}
          item={comic}
        />
      ))}
    </CustomCarousel>
  )

  const renderLoading = () => (
    <div style={{ width: 300, height: 500 }}>loading</div>
  )

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
      <section id='#' className='welcomeSection'>
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
      <Section
        id='comics'
        customStyles={{ backgroundColor: '#F5F5F5' }}
        title='Procure o seu quadrinho preferido!'
      >
        {comics.length === 20 ? renderCarousel() : renderLoading()}
      </Section>
      <section style={{ height: 500 }} />
    </>
  )
}

export default Home
