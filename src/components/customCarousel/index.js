import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { breakpoints } from '../../themes'

const CustomCarousel = ({ children }) => {
  return ((
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
      {children}
    </Carousel>
  ))
}

export default CustomCarousel
