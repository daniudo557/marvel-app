import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromList, addToList } from '../../redux/actions/comics'
import { selectors } from '../../redux/selectors/comics'
import ReactLoading from 'react-loading'

import API from '../../services/api'
import { getComicImage, getNumberOnList } from '../../functions/utils'

import Button from '../../components/button'
import Card from '../../components/card'
import Banner from '../../components/banner'
import Section from '../../components/section'

import { images } from '../../themes'

const Comics = (props) => {
  const { params } = props.match

  const [comicsResponse, setComicsResponse] = useState([])
  const [creatorResponse, setCreatorResponse] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const comics = useSelector(selectors.getComics)

  const dispatch = useDispatch()

  const removeComicFromList = (comic) => dispatch(removeFromList(comic))
  const addComicToList = (comic) => dispatch(addToList(comic))

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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card backgroundColor='white'>
        <h3>Criador: {creatorResponse
          ? creatorResponse?.fullName
          : 'Invalid Creator'}
        </h3>
        <h3>Data de publicação: {getComicReleasedDate()}</h3>
        <h3>Número de páginas: {comicsResponse?.pageCount}</h3>
        <h3>Descrição: {comicsResponse?.description
          ? comicsResponse?.description
          : 'Invalid description'}
        </h3>
        <h3>Na sua lista: {getNumberOnList(comics, comicsResponse?.id)}</h3>
        <Button
          text='Remover da lista'
          onClick={() => removeComicFromList(comicsResponse)}
        />
        <Button
          text='Adicionar à lista'
          onClick={() => addComicToList(comicsResponse)}
        />
      </Card>
    </div>
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
        customStyles={{ backgroundColor: '#EEEEEE' }}
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
      backgroundImage={images.errorBackground}
      text='Não foi possível carregar os dados do quadrinho'
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
        height='20%'
        width='20%'
      />
    </div>
  )

  if (isLoading) {
    return renderLoading()
  }

  return isError ? renderError() : renderContent()
}

export default Comics
