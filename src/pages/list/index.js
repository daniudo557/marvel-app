import React from 'react'

import Banner from '../../components/banner'
import { images } from '../../themes'
const List = (props) => {
  const { params } = props.match
  console.log(params)
  return (
    <div className=''>
      <Banner image={images.list} />
    </div>
  )
}

export default List
