import React from 'react'

import { useWindowDimensions } from '../../functions/utils'
import { breakpoints } from '../../themes'
import './styles.scss'

const Section = ({ title, customStyles, children, id }) => {
  const { width } = useWindowDimensions()

  const desktopStyles = { ...customStyles, paddingRight: 32, paddingLeft: 32 }
  const tabletStyles = { ...customStyles, paddingRight: 16, paddingLeft: 16 }
  const mobileStyles = { ...customStyles, paddingRight: 8, paddingLeft: 8 }

  const isDesktop = width > breakpoints.md
  const isTablet = width > breakpoints.sm && width <= breakpoints.md
  const isMobile = width <= breakpoints.sm

  const getStyles = () => {
    if (isDesktop) return desktopStyles
    else if (isTablet) return tabletStyles
    else if (isMobile) return mobileStyles
  }

  return (
    <section
      id={id}
      style={getStyles()}
      className='container'
    >
      <h2 className='title'>{title}</h2>
      {children}
    </section>
  )
}

export default Section
