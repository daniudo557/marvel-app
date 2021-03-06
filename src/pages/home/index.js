import React, { useState, useEffect } from 'react'

import { images } from '../../themes'
import { getBreakpoints, useWindowDimensions } from '../../functions/utils'

import API from '../../services/api'
import './styles.scss'

import Section from '../../components/section'
import CustomCarousel from '../../components/customCarousel'
import CarouselItem from '../../components/carouselItem'

// TODO: Remove this import
import { useSelector } from 'react-redux'
import { selectors } from '../../redux/selectors/comics'
//

const Home = () => {
  const { width } = useWindowDimensions()
  const { isDesktop, isTablet, isMobile } = getBreakpoints(width)

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

  const getwelcomeSectionContainerClass = () => {
    if (isDesktop) return 'welcomeSectionContainer'
    else if (isTablet) return 'welcomeSectionContainer-tablet'
    else if (isMobile) return 'welcomeSectionContainer-mobile'
  }

  const getWelcomeSectionTxtClass = () => {
    if (isDesktop) return 'welcomeSectionTxt'
    else if (isTablet) return 'welcomeSectionTxt-tablet'
    else if (isMobile) return 'welcomeSectionTxt-mobile'
  }

  return (
    <>
      <div className='backgroundImgContainer'>
        <div
          className='backgroundImg'
          style={{ backgroundImage: `url(${images.headerBackground})` }}
        />
      </div>
      <section id='#' className='welcomeSection'>
        <div className={getwelcomeSectionContainerClass()}>
          <img
            src={images.header}
            alt='logo'
            className={`animatedImgSlideRight 
            ${isDesktop ? 'animatedImg' : 'animatedImg-tablet'}`}
          />
          <div
            className={`welcomeSectionTxtAppear ${getWelcomeSectionTxtClass()}`}
          >
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </div>
        </div>
      </section>
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
