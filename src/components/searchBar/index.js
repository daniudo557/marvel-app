import React from 'react'

import './styles.scss'

import { getBreakpoints, useWindowDimensions } from '../../functions/utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ placeholder, onChange }) => {
  const { width } = useWindowDimensions()
  const { isTablet, isMobile } = getBreakpoints(width)

  return (
    <form className={`searchBar ${(isTablet || isMobile) && 'searchBar-mobile'}`}>
      <FontAwesomeIcon
        style={{ alignSelf: 'center', fontSize: 26 }}
        color='#F0141E'
        icon={faSearch}
      />
      <input type='text' style={{ width: '100%' }} onChange={onChange} placeholder={placeholder} />
    </form>
  )
}

export default SearchBar
