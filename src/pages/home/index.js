import React from 'react'

import { images, breakpoints } from '../../themes'
import { useWindowDimensions } from '../../functions/utils'
import './styles.scss'

const Home = () => {
  const { width } = useWindowDimensions()

  const isDesktop = width > breakpoints.md
  const isTablet = width > breakpoints.sm && width <= breakpoints.md
  const isMobile = width <= breakpoints.sm

  const animatedImageDesktopClass = 'slide-right animatedImage'
  const animatedImageTabletClass = 'slide-right animatedImage-tablet'
  const animatedImageMobileClass = 'slide-right animatedImage-mobile'

  const getAnimatedImageClass = () => {
    if (isDesktop) return animatedImageDesktopClass
    else if (isTablet) return animatedImageTabletClass
    else if (isMobile) return animatedImageMobileClass
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
        <div
          className={isDesktop
            ? 'welcomeSectionContainer'
            : 'welcomeSectionContainer-mobile'}
        >
          <img
            src={images.header}
            className={getAnimatedImageClass()}
            alt='logo'
          />
          <p className='appear' style={{ alignSelf: 'center', maxWidth: 500 }}>
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </p>
        </div>
      </section>
      <section style={{ backgroundColor: 'red', height: '90vh', width: '100%' }}>
        Secion
      </section>
    </>
  )
}

export default Home
