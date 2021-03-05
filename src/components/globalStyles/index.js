import React from 'react'

import { breakpoints } from '../../themes'
import { useWindowDimensions } from '../../functions/utils'

const GlobalStyles = ({ children }) => {
  const { width } = useWindowDimensions()
  const isMobile = width <= breakpoints.md

  const mobileStyles = { paddingRight: 8, paddingLeft: 8 }
  const desktopStyles = { paddingRight: 16, paddingLeft: 16 }

  return (
    <div style={isMobile ? mobileStyles : desktopStyles}>
      {children}
    </div>
  )
}

export default GlobalStyles
