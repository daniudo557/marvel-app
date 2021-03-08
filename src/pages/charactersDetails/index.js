import React, { useState, useEffect } from 'react'

import ReactLoading from 'react-loading'

import API from '../../services/api'
import { getComicImage } from '../../functions/utils'

import Card from '../../components/card'
import Banner from '../../components/banner'
import Section from '../../components/section'

import { images } from '../../themes'

const Characters = (props) => {
  const { params } = props.match

  const [charactersResponse, setCharactersResponse] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.getCharactersById(params.id).then(({ data }) => {
      setCharactersResponse(data.data.results.pop())

      setLoading(false)
      setError(false)
    }).catch(() => {
      setError(true)
      setLoading(false)
    })
  }, [])

  const renderContent = () => (
    <>
      <Banner
        shadowFilter
        image={getComicImage(charactersResponse)}
        backgroundImage={getComicImage(charactersResponse)}
        text={charactersResponse?.name}
      />
      <Section
        customStyles={{ backgroundColor: '#EEEEEE' }}
        title={charactersResponse?.name}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card backgroundColor='white'>
            <h3>Descrição: {charactersResponse?.description
              ? charactersResponse?.description
              : 'Invalid description'}
            </h3>
          </Card>
        </div>
      </Section>
    </>
  )

  const renderError = () => (
    <Banner
      shadowFilter
      image={images.error}
      backgroundImage={images.errorBackground}
      text='Não foi possível carregar os dados do personagem'
    />
  )

  const renderLoading = () => (
    <div style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <ReactLoading
        type='spin'
        color='#F0141E'
        height='6%'
        width='6%'
      />
    </div>
  )

  if (isLoading) {
    return renderLoading()
  }

  return isError ? renderError() : renderContent()
}

export default Characters
