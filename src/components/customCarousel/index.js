import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CustomCarousel = ({ items }) => {
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
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      {items.map((item, index) => (
        <div key={index} onClick={() => console.log(item.id)}>
          <img
            style={{ width: '100%', height: '100%' }}
            onDragStart={preventDragHandler}
            alt='comics'
            src={item.thumbnail.path + '.' + item.thumbnail.extension}
          />
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
