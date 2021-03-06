import React from 'react'

const List = (props) => {
  const { params } = props.match
  console.log(params)
  return (
    <div className=''>
      List page
    </div>
  )
}

export default List
