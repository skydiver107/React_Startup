import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SlickComponent = ({children}: any) => {

  return (
    <Carousel
      additionalTransfrom={0 }
      arrows
      autoPlaySpeed={3000}
      centerMode={true}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={100}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={true}
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
            max: 850,
            min: 0
          },
          items: 1,
          // partialVisibilityGutter: 100
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 850
          },
          items: 2,
          // partialVisibilityGutter: 100
        }
      }}
      rewind={true}
      rewindWithAnimation={true}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      // additionalTransfrom={0}
      // arrows
      // autoPlaySpeed={3000}
      // centerMode={false}
      // className=""
      // containerClass="container-with-dots"
      // dotListClass=""
      // draggable
      // focusOnSelect={false}
      // infinite
      // itemClass=""
      // keyBoardControl
      // minimumTouchDrag={80}
      // pauseOnHover
      // renderArrowsWhenDisabled={false}
      // renderButtonGroupOutside={false}
      // renderDotsOutside={false}
      // responsive={{
      //   desktop: {
      //     breakpoint: {
      //       max: 3000,
      //       min: 1024
      //     },
      //     items: 3,
      //     partialVisibilityGutter: 40
      //   },
      //   mobile: {
      //     breakpoint: {
      //       max: 464,
      //       min: 0
      //     },
      //     items: 1,
      //     partialVisibilityGutter: 30
      //   },
      //   tablet: {
      //     breakpoint: {
      //       max: 1024,
      //       min: 464
      //     },
      //     items: 2,
      //     partialVisibilityGutter: 30
      //   }
      // }}
      // rewind={false}
      // rewindWithAnimation={false}
      // rtl={false}
      // shouldResetAutoplay
      // showDots={false}
      // sliderClass=""
      // slidesToSlide={1}
      // swipeable
    >
      {children}
    </Carousel>
  )
}

export default  SlickComponent