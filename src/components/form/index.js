import React, { useState } from 'react'

import Button from '../../components/button'
import './styles.scss'

const Form = ({ comics }) => {
  const [fields, setFields] = useState({
    name: '',
    email: ''
  })
  const [isEmailEmpty, setEmailEmpty] = useState(false)
  const [isNameEmpty, setNameEmpty] = useState(false)

  const parseComics = (comicsArray) => (
    comicsArray.map((comic) => ({
      title: comic.comicDetails.title,
      numberOfComics: comic.numberOfComics
    }))
  )

  const handleInputChange = (event) => {
    fields[event.target.name] = event.target.value

    setFields(fields)
  }

  const handleFormSubmit = (event) => {
    if (isEmptyForm()) return

    console.log({ ...fields, list: parseComics(comics) })
  }

  const isEmptyForm = () => {
    if (fields.name === '') setNameEmpty(true)
    else setNameEmpty(false)

    if (fields.email === '') setEmailEmpty(true)
    else setEmailEmpty(false)

    return (isNameEmpty || isEmailEmpty)
  }

  return (
    <div className='formContainer'>
      <label htmlFor='email'>E-mail</label>
      <input
        onChange={handleInputChange}
        type='text'
        id='email'
        name='email'
        placeholder='exemplo@email.com'
      />

      <label htmlFor='name'>Nome</label>
      <input onChange={handleInputChange} type='text' id='name' name='name' placeholder='Daniel Macedo' />
      <Button
        text='Enviar email'
        onClick={() => handleFormSubmit()}
      />
      {isNameEmpty && <h1>Preencha o campo "nome"</h1>}
      {isEmailEmpty && <h1>Preencha o campo "email"</h1>}
    </div>
  )
}

export default Form
