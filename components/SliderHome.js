import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

export default function SliderHome() {
  return (
    <section className="relative shadow-2xl max-w-full mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="h-[150px] sm:h-auto">
          <img
            className="h-[100%] object-cover"
            loading="lazy"
            src="/images/slider-1.jpg"
            alt=""
          />
        </div>
        <div className="h-[150px] sm:h-auto">
          <img
            className="h-[100%] object-cover"
            loading="lazy"
            src="/images/slider-2.jpg"
            alt=""
          />
        </div>
        <div className="h-[150px] sm:h-auto">
          <img
            className="h-[100%] object-cover"
            loading="lazy"
            src="/images/slider-3.jpg"
            alt=""
          />
        </div>
        <div className="h-[150px] sm:h-auto">
          <img
            className="h-[100%] object-cover"
            loading="lazy"
            src="/images/slider-4.jpeg"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
}
