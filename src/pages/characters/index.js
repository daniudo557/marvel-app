import React, { useState, useEffect } from 'react'

import { getBreakpoints, useWindowDimensions } from '../../functions/utils'

import API from '../../services/api'

import Section from '../../components/section'
import Banner from '../../components/banner'
import CustomCarousel from '../../components/customCarousel'
import CarouselItem from '../../components/carouselItem'
import SearchBar from '../../components/searchBar'

const Characters = () => {
  const { width } = useWindowDimensions()
  const { isTablet } = getBreakpoints(width)

  const [charactersResponse, setCharactersResponse] = useState([])
  const [charactersFiltered, setCharactersFilter] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.getCharacters().then(({ data }) => {
      setCharactersResponse(data.data.results)
      setCharactersFilter(data.data.results)
      setLoading(false)
    })
  }, [])

  const renderContent = () => (
    charactersFiltered.length === 0
      ? renderCharactersNotFount()
      : renderCarousel()
  )

  const renderCharactersNotFount = () => (
    <div className='comicsNotFoundContainer'>
      <h2>Não foi personagem com esse nome</h2>
    </div>
  )
  const renderCarousel = () => (
    <CustomCarousel isMobile={isTablet}>
      {charactersFiltered.map((character, index) => (
        <CarouselItem
          key={index}
          item={character}
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

  const searchCharacters = (text) => {
    const textTypedInLowerCase = text.toLowerCase()
    const filteredCharactersArray = charactersResponse.filter((comic) => {
      const titleInLowerCase = comic.name.toLowerCase()
      return titleInLowerCase.includes(textTypedInLowerCase)
    })
    setCharactersFilter(filteredCharactersArray)
  }

  return (
    <>
      <Banner
        text='Bem vindo(a) ao Marvel-App! Explore o mundo dos quadrinhos'
      />
      <Section
        customStyles={{ backgroundColor: '#EEEEEE' }}
        title='Procure o seu personagem preferido!'
      >
        <SearchBar
          onChange={(event) => searchCharacters(event.target.value)}
          placeholder='Spider-man'
        />
        {isLoading ? renderLoading() : renderContent()}
      </Section>
    </>
  )
}

export default Characters
