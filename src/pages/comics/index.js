import React, { useState, useEffect } from 'react'

import API from '../../services/api'
import { getComicImage } from '../../functions/utils'
import Banner from '../../components/banner'
import Section from '../../components/section'
import { images } from '../../themes'

const Comics = (props) => {
  const { params } = props.match
  console.log(params)

  const [comicsResponse, setComicsResponse] = useState([])
  const [creatorResponse, setCreatorResponse] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.getComicsById(params.id).then(({ data }) => {
      setComicsResponse(data.data.results.pop())

      if (comicsResponse?.creators?.available > 0) {
        API.getCreatorsByComicId(params.id).then(({ data }) => {
          setCreatorResponse(data.data.results.pop())
        }).catch(() => {
          setError(true)
          setLoading(false)
        })
      }
      setLoading(false)
      setError(false)
    }).catch(() => {
      setError(true)
      setLoading(false)
    })
  }, [])

  const getComicReleasedDate = () => {
    const unformatedDate = comicsResponse?.dates?.filter(item => item.type === 'focDate')[0].date
    const date = new Date(unformatedDate)
    return date.toLocaleDateString()
  }

  const renderComicInformation = () => (
    <>
      <h2>Criador: {creatorResponse
        ? creatorResponse?.fullName
        : 'Invalid Creator'}
      </h2>
      <h2>Data de publicação: {getComicReleasedDate()}</h2>
      <h2>Número de páginas: {comicsResponse?.pageCount}</h2>
      <h2>Descrição: {comicsResponse?.description
        ? comicsResponse?.description
        : 'Invalid description'}
      </h2>
    </>
  )

  const renderContent = () => (
    <>
      <Banner
        shadowFilter
        image={getComicImage(comicsResponse)}
        backgroundImage={getComicImage(comicsResponse)}
        text={comicsResponse?.title}
      />
      <Section
        customStyles={{ backgroundColor: '#F5F5F5' }}
        title={comicsResponse?.title}
      >
        {renderComicInformation()}
      </Section>
    </>
  )

  const renderError = () => (
    <Banner
      shadowFilter
      image={images.error}
      text='Não foi possível carregar os dados do quadrinho'
    />
  )

  if (isLoading) {
    return <h1>Loading</h1>
  }
  return isError ? renderError() : renderContent()
}

export default Comics
