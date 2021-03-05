import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { useWindowDimensions } from '../../functions/utils'
import { breakpoints } from '../../themes'
import './styles.scss'

const CustomCarousel = ({ items }) => {
  const { width } = useWindowDimensions()

  // const isDesktop = width > breakpoints.md
  // const isTablet = width > breakpoints.sm && width <= breakpoints.md
  const isMobile = width <= breakpoints.sm

  const preventDragHandler = (e) => {
    e.preventDefault()
  }

  const renderCarousel = () => (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass='container-with-dots'
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass=''
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: breakpoints.xl
          },
          items: 5,
          partialVisibilityGutter: 0
        },
        desktop2: {
          breakpoint: {
            max: breakpoints.xl,
            min: breakpoints.lg
          },
          items: 3,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: breakpoints.lg,
            min: breakpoints.md
          },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: {
            max: breakpoints.md,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      {items.map((item, index) => (
        <div className={isMobile ? 'carouselItemContainerMobile' : 'carouselItemContainer'} key={index}>
          <div id='arrow' className='carouselItem' onClick={() => console.log(item.id)}>
            <img
              className='carouselImage'
              onDragStart={preventDragHandler}
              alt='comics'
              src={item.thumbnail.path + '.' + item.thumbnail.extension}
            />
            <div className='itemFooter'>
              <div className='comicTitle'>
                {item.title}
              </div>
              <div className='itemFooterButtons'>
                <div className='button'>
                  Adicionar a lista
                </div>
                <div className='button'>
                  Detalhes
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
  const renderLoading = () => (
    <div style={{ width: 300, height: 500 }}>loading</div>
  )

  return items.length === 20 ? renderCarousel() : renderLoading()
}

export default CustomCarousel
