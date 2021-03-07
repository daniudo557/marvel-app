import React, { useState } from 'react'

import API from '../../services/api'

import Button from '../../components/button'
import Card from '../../components/card'
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

  const handleFormSubmit = () => {
    if (isEmptyForm()) return

    API.sendEmail({ ...fields, comics: parseComics(comics) })
  }

  const isEmptyForm = () => {
    if (fields.name === '') setNameEmpty(true)
    else setNameEmpty(false)

    if (fields.email === '') setEmailEmpty(true)
    else setEmailEmpty(false)

    return (isNameEmpty || isEmailEmpty)
  }

  return (
    <Card backgroundColor='#F2F2F2'>
      <label>E-mail</label>
      {isEmailEmpty && <label className='errorLabel'>* Preencha o campo "E-mail"</label>}
      <input
        className={`formInput ${isEmailEmpty && 'errorBorder'}`}
        onChange={handleInputChange}
        type='text'
        id='email'
        name='email'
        placeholder='exemplo@email.com'
      />

      <label>Nome: </label>
      {isNameEmpty && <label className='errorLabel'>* Preencha o campo "Nome"</label>}
      <input
        className={`formInput ${isNameEmpty && 'errorBorder'}`}
        onChange={handleInputChange}
        type='text'
        id='name'
        name='name'
        placeholder='Daniel Macedo'
      />
      <Button
        text='Enviar email'
        onClick={() => handleFormSubmit()}
      />
    </Card>
  )
}

export default Form
