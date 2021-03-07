import React, { useState, useEffect } from 'react'

import { getBreakpoints, useWindowDimensions } from '../../functions/utils'

import API from '../../services/api'
import './styles.scss'

import Section from '../../components/section'
import Banner from '../../components/banner'
import CustomCarousel from '../../components/customCarousel'
import CarouselItem from '../../components/carouselItem'
import SearchBar from '../../components/searchBar'

const Home = () => {
  const { width } = useWindowDimensions()
  const { isTablet } = getBreakpoints(width)

  const [comicsResponse, setComicsResponse] = useState([])
  const [comicsFiltered, setComicsFilter] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.getComics().then(({ data }) => {
      setComicsResponse(data.data.results)
      setComicsFilter(data.data.results)
      setLoading(false)
    })
  }, [])

  const renderContent = () => (
    comicsFiltered.length === 0
      ? renderComicsNotFount()
      : renderCarousel()
  )
  const renderComicsNotFount = () => (
    <div className='comicsNotFoundContainer'>
      <h2>Não foi encontrado nenhum quadrinho com esse título</h2>
    </div>
  )
  const renderCarousel = () => (
    <CustomCarousel isMobile={isTablet}>
      {comicsFiltered.map((comic, index) => (
        <CarouselItem
          key={index}
          item={comic}
          isComics
        />
      ))}
    </CustomCarousel>
  )

  const renderLoading = () => {
    const loadinRandomArray =
     Array(5).fill().map(() => Math.round(Math.random() * 5))
    return (
      <CustomCarousel isMobile={isTablet}>
        {loadinRandomArray.map((item, index) => (
          <CarouselItem
            key={index}
            isLoading
          />
        ))}
      </CustomCarousel>
    )
  }

  const searchComics = (text) => {
    const textTypedInLowerCase = text.toLowerCase()
    const filteredComicsArray = comicsResponse.filter((comic) => {
      const titleInLowerCase = comic.title.toLowerCase()
      return titleInLowerCase.includes(textTypedInLowerCase)
    })
    setComicsFilter(filteredComicsArray)
  }

  return (
    <>
      <Banner
        text='Bem vindo(a) ao Marvel-App! Explore o mundo dos quadrinhos'
      />
      <Section
        id='comics'
        customStyles={{ backgroundColor: '#EEEEEE' }}
        title='Procure o seu quadrinho preferido!'
      >
        <SearchBar
          onChange={(event) => searchComics(event.target.value)}
          placeholder='X-Men: Days of Future Past (Trade Paperback)'
        />
        {isLoading ? renderLoading() : renderContent()}
      </Section>
    </>
  )
}

export default Home
