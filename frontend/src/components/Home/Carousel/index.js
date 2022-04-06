import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const OffersCarousel = ({ slides }) => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      emulateTouch={true}
      infiniteLoop={true}
      className="offers_carousel"
    >
      {slides?.map((slide) => {
        return (
          <div key={slide.id}>
            <img src={slide.bannerImageUrl} alt={slide.bannerImageAlt} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default OffersCarousel;
