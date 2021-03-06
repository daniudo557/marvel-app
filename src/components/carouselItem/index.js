import React from 'react'

import { connect } from 'react-redux'

import { actions } from '../../actions/counter'

import { useWindowDimensions, getBreakpoints } from '../../functions/utils'
import Button from '../button'
import './styles.scss'

const CarouselItem = ({ item, counter, decrement, increment }) => {
  const { width } = useWindowDimensions()
  const { isTablet, isMobile } = getBreakpoints(width)

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
            {counter}
          </div>
          <div className='itemFooterButtons'>
            <Button
              text='Adicionar a lista'
              onClick={decrement}
            />
            <Button
              text='Detalhes'
              onClick={increment}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counterReducers.counter
})

const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(actions.decrement()),
  increment: () => dispatch(actions.increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem)
