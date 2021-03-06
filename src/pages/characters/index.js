import React from 'react'

const Characters = (props) => {
  const { params } = props.match
  console.log(params)
  return (
    <div className=''>
      Characters page
    </div>
  )
}

export default Characters
