import React from 'react'

const Comics = (props) => {
  const { params } = props.match
  console.log(params)
  return (
    <div className=''>
      Comics page
    </div>
  )
}

export default Comics
