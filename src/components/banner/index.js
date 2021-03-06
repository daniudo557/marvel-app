import React from 'react'
import { images } from '../../themes'

import { getBreakpoints, useWindowDimensions } from '../../functions/utils'

const Banner = () => {
  const { width } = useWindowDimensions()
  const { isDesktop, isTablet, isMobile } = getBreakpoints(width)

  const getwelcomeSectionContainerClass = () => {
    if (isDesktop) return 'welcomeSectionContainer'
    else if (isTablet) return 'welcomeSectionContainer-tablet'
    else if (isMobile) return 'welcomeSectionContainer-mobile'
  }

  const getWelcomeSectionTxtClass = () => {
    if (isDesktop) return 'welcomeSectionTxt'
    else if (isTablet) return 'welcomeSectionTxt-tablet'
    else if (isMobile) return 'welcomeSectionTxt-mobile'
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
            COMICS
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
