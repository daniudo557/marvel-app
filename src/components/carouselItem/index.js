import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromList, addToList } from '../../redux/actions/comics'
import { selectors } from '../../redux/selectors/comics'

import {
  useWindowDimensions,
  getBreakpoints,
  getComicImage,
  getNumberOnList
} from '../../functions/utils'

import Button from '../button'
import './styles.scss'

const CarouselItem = ({ item, isLoading, isComics }) => {
  const { width } = useWindowDimensions()
  const { isTablet, isMobile } = getBreakpoints(width)

  const dispatch = useDispatch()
  const comics = useSelector(selectors.getComics)

  const removeComicFromList = (comic) => dispatch(removeFromList(comic))
  const addComicToList = (comic) => dispatch(addToList(comic))

  const preventDragHandler = (e) => {
    e.preventDefault()
  }

  const getTitle = () => isComics ? item.title : item.name
  const renderButtons = () => (
    <div className='itemFooterButtons'>
      <Button
        text='Remover da lista'
        onClick={() => removeComicFromList(item)}
      />
      <Button
        text='Adicionar à lista'
        onClick={() => addComicToList(item)}
      />
    </div>
  )
  const getNumberOfComics = () => (
    <h2 className='numberOfComicIndicator'>
      {getNumberOnList(comics, item.id)}
    </h2>
  )

  const renderContent = () => (
    <>
      <Link
        className={`carouselImageContainer ${!isComics &&
          'carouselImageContainer-characters'}`}
        to={isComics ? `comics/${item.id}` : `characters/${item.id}`}
      >
        {isComics && getNumberOfComics()}
        <h2 id='seeMore'>VER MAIS</h2>
        <img
          className='carouselImage'
          onDragStart={preventDragHandler}
          alt={getTitle()}
          src={getComicImage(item)}
        />
      </Link>
      <div className='itemFooter'>
        <div className='comicTitle'>
          {getTitle()}
        </div>
        {isComics && renderButtons()}
      </div>
    </>
  )
  return (
    <div
      className={`carouselItemContainer
        ${isMobile && 'carouselItemContainer-mobile'}`}
    >
      <div
        id='arrow'
        className={`carouselItem 
        ${isTablet && 'carouselItem-tablet'}
        ${isLoading && 'loading'}`}
      >
        {!isLoading && renderContent()}
      </div>
    </div>
  )
}

export default CarouselItem
