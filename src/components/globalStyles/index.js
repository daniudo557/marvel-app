import React from 'react'

import { useWindowDimensions, getBreakpoints } from '../../functions/utils'

const GlobalStyles = ({ children }) => {
  const { width } = useWindowDimensions()
  const { isMobile } = getBreakpoints(width)

  const mobileStyles = { paddingRight: 8, paddingLeft: 8 }
  const desktopStyles = { paddingRight: 16, paddingLeft: 16 }

  return (
    <div style={isMobile ? mobileStyles : desktopStyles}>
      {children}
    </div>
  )
}

export default GlobalStyles
