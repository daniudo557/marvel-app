import React, { useState, useEffect } from 'react'

import { getBreakpoints, useWindowDimensions } from '../../functions/utils'

import API from '../../services/api'
import './styles.scss'

import Section from '../../components/section'
import Banner from '../../components/banner'
import CustomCarousel from '../../components/customCarousel'
import CarouselItem from '../../components/carouselItem'

// TODO: Remove this import
import { useSelector } from 'react-redux'
import { selectors } from '../../redux/selectors/comics'
//

const Home = () => {
  const { width } = useWindowDimensions()
  const { isTablet } = getBreakpoints(width)

  const [comicsResponse, setComicsResponse] = useState([])
  const [isLoading, setLoading] = useState(false)
  // const [characters, setCharacters] = useState([])

  // TODO: Remove this variable
  const comics = useSelector(selectors.getComics)

  useEffect(() => {
    setLoading(true)
    API.getComics().then(({ data }) => {
      setComicsResponse(data.data.results)
      setLoading(false)
    })
  }, [])

  // useEffect(() => {
  //   API.getCharacters().then(({ data }) => {
  //     setCharacters(data.data.results)
  //   })
  // }, [])

  // useEffect(() => {
  //   API.getCharacters2().then(({ data }) => {
  //     console.log(data)
  //   })
  // }, [])

  console.log(comicsResponse)
  console.log('REDUX', comics)
  // console.log(characters)

  const renderCarousel = () => (
    <CustomCarousel isMobile={isTablet}>
      {comicsResponse.map((comic, index) => (
        <CarouselItem
          key={index}
          item={comic}
        />
      ))}
    </CustomCarousel>
  )

  const renderLoading = () => (
    <div style={{ width: 300, height: 500 }}>loading</div>
  )

  return (
    <>
      <Banner
        text='Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.'
      />
      <Section
        id='comics'
        customStyles={{ backgroundColor: '#F5F5F5' }}
        title='Procure o seu quadrinho preferido!'
      >
        {isLoading ? renderLoading() : renderCarousel()}
      </Section>
      <section style={{ height: 500 }}>
        {comics.map((comic, index) => (
          <div key={index} style={{ padding: 32 }}>
            <h1>Comic title: {comic.comicDetails.title}</h1>
            <h1>Number of comics: {comic.numberOfComics}</h1>
          </div>
        ))}
      </section>
    </>
  )
}

export default Home
