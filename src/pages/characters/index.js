import React from 'react'
import Banner from '../../components/banner'

const Characters = (props) => {
  const { params } = props.match
  console.log(params)
  return (
    <div className=''>
      <Banner />
    </div>
  )
}

export default Characters
