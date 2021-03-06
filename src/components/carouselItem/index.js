import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../../redux/actions/comics'
import { selectors } from '../../redux/selectors/comics'

import { useWindowDimensions, getBreakpoints } from '../../functions/utils'
import Button from '../button'
import './styles.scss'

const CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions()
  const { isTablet, isMobile } = getBreakpoints(width)

  const comics = useSelector(selectors.getComics)
  const dispatch = useDispatch()

  const handleDecrement = () => dispatch(actions.removeFromList())
  const handleIncrement = () => dispatch(actions.addToList())

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
        <img
          className='carouselImage'
          onDragStart={preventDragHandler}
          alt={item.title}
          src={item.thumbnail.path + '.' + item.thumbnail.extension}
        />
        <div className='itemFooter'>
          <div className='comicTitle'>
            {item.title}
            {comics}
          </div>
          <div className='itemFooterButtons'>
            <Button
              text='Adicionar a lista'
              onClick={handleDecrement}
            />
            <Button
              text='Detalhes'
              onClick={handleIncrement}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
