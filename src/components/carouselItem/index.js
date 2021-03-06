import Button from '../button'
import './styles.scss'

import { useWindowDimensions, getBreakpoints } from '../../functions/utils'

const CarouselItem = ({ item }) => {
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
          </div>
          <div className='itemFooterButtons'>
            <Button
              text='Adicionar a lista'
              onClick={() => console.log('added to list')}
            />
            <Button
              text='Detalhes'
              onClick={() => console.log('details')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
