import React from 'react'
import { images } from '../../themes'

import { getBreakpoints, useWindowDimensions } from '../../functions/utils'

import './styles.scss'

const Banner = ({
  backgroundImage = images.headerBackground,
  image = images.header,
  shadowFilter,
  text
}) => {
  const { width } = useWindowDimensions()
  const { isDesktop, isTablet, isMobile } = getBreakpoints(width)
  const desktopStyles = { paddingRight: 32, paddingLeft: 32 }
  const tabletStyles = { paddingRight: 16, paddingLeft: 16 }
  const mobileStyles = { paddingRight: 8, paddingLeft: 8 }

  const getStyles = () => {
    if (isDesktop) return desktopStyles
    else if (isTablet) return tabletStyles
    else if (isMobile) return mobileStyles
  }

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
    <section style={getStyles()}>
      <div className='backgroundImgContainer'>
        <div
          className='backgroundImg'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {shadowFilter && <div className='shadowFilter' />}
      </div>
      <div id='#' className='welcomeSection'>
        <div className={getwelcomeSectionContainerClass()}>
          <img
            src={image}
            alt='logo'
            className={`animatedImgSlideRight 
            ${isDesktop
              ? 'animatedImg'
              : isTablet
                ? 'animatedImg-tablet'
                : 'animatedImg-mobile'}`}
          />
          <div
            className={`welcomeSectionTxtAppear ${getWelcomeSectionTxtClass()}`}
          >
            {text}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
