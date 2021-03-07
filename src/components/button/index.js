import React from 'react'
import './styles.scss'

const Button = ({ text, onClick = () => {} }) => {
  return (
    <button onClick={onClick} className='buttonContainer'>
      {text}
    </button>
  )
}

export default Button
