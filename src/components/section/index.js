import React from 'react'

import { useWindowDimensions, getBreakpoints } from '../../functions/utils'
import './styles.scss'

const Section = ({ title, customStyles, children, id }) => {
  const { width } = useWindowDimensions()
  const { isDesktop, isTablet, isMobile } = getBreakpoints(width)

  const desktopStyles = { ...customStyles, padding: 32 }
  const tabletStyles = { ...customStyles, padding: 16 }
  const mobileStyles = { ...customStyles, padding: 8 }

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
