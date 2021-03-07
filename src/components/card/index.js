import React from 'react'
import './styles.scss'

const Card = ({ children, backgroundColor }) => (
  <div className='cardContainer' style={{ backgroundColor }}>
    {children}
  </div>
)

export default Card
