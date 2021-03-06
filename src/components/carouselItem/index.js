import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromList, addToList } from '../../redux/actions/comics'
import { selectors } from '../../redux/selectors/comics'

import paths from '../../routes/paths'
import { useWindowDimensions, getBreakpoints } from '../../functions/utils'
import Button from '../button'
import './styles.scss'

const CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions()
  const { isTablet, isMobile } = getBreakpoints(width)

  // const comics = useSelector(selectors.getComics)
  const dispatch = useDispatch()

  const handleDecrement = (comic) => dispatch(removeFromList(comic))
  const handleIncrement = (comic) => dispatch(addToList(comic))

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
          to={`${paths.comics}?${item.id}`}
        >
          <h2 id='seeMore'>VER MAIS</h2>
          <img
            className='carouselImage'
            onDragStart={preventDragHandler}
            alt={item.title}
            src={item.thumbnail.path + '.' + item.thumbnail.extension}
          />
        </Link>
        <div className='itemFooter'>
          <div className='comicTitle'>
            {item.title}
          </div>
          <div className='itemFooterButtons'>
            <Button
              text='Adicionar a lista'
              onClick={() => handleDecrement(item)}
            />
            <Button
              text='Detalhes'
              onClick={() => handleIncrement(item)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
