import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { removeFromList, addToList } from '../../redux/actions/comics'

import { useWindowDimensions, getBreakpoints, getComicImage } from '../../functions/utils'
import Button from '../button'
import './styles.scss'

const CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions()
  const { isTablet, isMobile } = getBreakpoints(width)

  const dispatch = useDispatch()

  const removeComicFromList = (comic) => dispatch(removeFromList(comic))
  const addComicToList = (comic) => dispatch(addToList(comic))

  const preventDragHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className={`carouselItemContainer 
        ${isMobile
          ? 'carouselItemContainer-mobile'
          : 'carouselItemContainer-tablet'}`}
    >
      <div
        id='arrow'
        className={`carouselItem ${isTablet && 'carouselItem-tablet'}`}
        onClick={() => console.log(item.id)}
      >
        <Link
          className='carouselImageContainer'
          to={`comics/${item.id}`}
        >
          <h2 id='seeMore'>VER MAIS</h2>
          <img
            className='carouselImage'
            onDragStart={preventDragHandler}
            alt={item.title}
            src={getComicImage(item)}
          />
        </Link>
        <div className='itemFooter'>
          <div className='comicTitle'>
            {item.title}
          </div>
          <div className='itemFooterButtons'>
            <Button
              text='Remover da lista'
              onClick={() => removeComicFromList(item)}
            />
            <Button
              text='Adicionar a lista'
              onClick={() => addComicToList(item)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
