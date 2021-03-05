import React from 'react'

import { images, breakpoints } from '../../themes'
import { useWindowDimensions } from '../../functions/utils'
import './styles.scss'

const Home = () => {
  const { width } = useWindowDimensions()

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
      <section style={{ backgroundColor: 'red', height: '90vh', width: '100%' }}>
        Secion
      </section>
    </>
  )
}

export default Home
