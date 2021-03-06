import React from 'react'
import Banner from '../../components/banner'

const Comics = (props) => {
  const { params } = props.match
  console.log(params)
  return (
    <Banner />
  )
}

export default Comics
