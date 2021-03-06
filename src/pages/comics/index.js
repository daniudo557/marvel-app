import React, { useState, useEffect } from 'react'

import API from '../../services/api'
import { getComicImage } from '../../functions/utils'
import Banner from '../../components/banner'
import Section from '../../components/section'

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
        }).catch(
          setError(true)
        )
      }
      setLoading(false)
      setError(false)
    }).catch(
      setError(true)
    )
  }, [])

  return (
    <>
      {isLoading
        ? <div>loading</div>
        : <Banner
            shadowFilter
            image={getComicImage(comicsResponse)}
            backgroundImage={getComicImage(comicsResponse)}
            text={comicsResponse?.title}
          />}
      <Section
        customStyles={{ backgroundColor: '#F5F5F5' }}
        title={comicsResponse?.title}
      >
        {creatorResponse && <h2>Criador: {creatorResponse?.fullName}</h2>}
        <h2>Data de publicação: {comicsResponse?.description}</h2>
        <h2>Número de páginas: {comicsResponse?.pageCount}</h2>
        <h2>Descrição: {comicsResponse?.description}</h2>
      </Section>
      {!isLoading && isError
        ? <h1>Nao foi possível encontrar os dados do quadrinho</h1>
        : <h1>Deu certo</h1>}
    </>
  )
}

export default Comics
