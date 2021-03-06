import React, { useState } from 'react'

import API from '../../services/api'

import ReactLoading from 'react-loading'

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
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [isSuccess, setSuccess] = useState(false)

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

  const sendEmail = () => {
    setSuccess(false)
    setLoading(true)

    API.sendEmail({ ...fields, comics: parseComics(comics) })
      .then(() => {
        setLoading(false)
        setSuccess(true)
      }
      )
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }

  const handleFormSubmit = () => {
    if (isEmptyForm()) return

    sendEmail()
  }

  const isEmptyForm = () => {
    // This had to be done because state take some time to update
    let isEmailFieldEmpty = false
    let isNameFieldEmpty = false

    if (fields.name === '') {
      setNameEmpty(true)
      isNameFieldEmpty = true
    } else {
      setNameEmpty(false)
      isNameFieldEmpty = false
    }

    if (fields.email === '') {
      setEmailEmpty(true)
      isEmailFieldEmpty = true
    } else {
      setEmailEmpty(false)
      isEmailFieldEmpty = false
    }

    return (isNameFieldEmpty || isEmailFieldEmpty)
  }

  const renderResponseLabel = () => {
    let customClass = ''
    let text = ''
    if (isError) {
      customClass = 'errorLabel'
      text = '* Não foi possível enviar o email. Tente novamente mais tarde'
    } else if (isSuccess) {
      customClass = 'successLabel'
      text = '* Email enviado com sucesso! Confira sua caixa de entrada'
    }

    return (
      <h5 className={`${customClass}`}>
        {text}
      </h5>
    )
  }

  const renderContent = () => (
    <>
      {(isError || isSuccess) && renderResponseLabel()}
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
        onClick={handleFormSubmit}
      />
    </>
  )

  const renderLoading = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactLoading
        type='spin'
        color='#F0141E'
        height='20%'
        width='20%'
      />
    </div>
  )

  return (
    <Card backgroundColor='#F2F2F2'>
      {isLoading ? renderLoading() : renderContent()}
    </Card>
  )
}

export default Form
