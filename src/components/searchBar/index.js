import React from 'react'
import './styles.scss'
import Button from '../../components/button'

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <form className='searchBarContainer'>
      <input type='text' onChange={onChange} placeholder={placeholder} />
      <Button />
    </form>
  )
}

export default SearchBar
