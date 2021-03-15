import Image from "next/image";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Lazy,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import InView, { useInView } from "react-intersection-observer";
import Delayed from "../Delayed/Delayed";
SwiperCore.use([EffectCoverflow, Navigation, Lazy, Autoplay]);

function Slider({ slides }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}>
      {InView && (
        <Delayed>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={1}
            slidesPerView={4}
            navigation
            preloadImages={false}
            activeSlideKey={5}
            autoplay={{
              delay: 1000,
            }}
            lazy={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 70,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="text-center w-8/12">
                  <Image
                    src={item.PREVIEW_PICTURE ? `${item.PREVIEW_PICTURE}` : "/"}
                    width={200}
                    height={200}
                  />
                  {/* <img src={item.PREVIEW_PICTURE} /> */}
                  <h1 className="font-extralight mt-1 text-base">
                    {item.NAME}
                  </h1>
                  <div className="">
                    <div className="text-base font-medium tracking-wide mt-1 font-mono">
                      {/* {item.description} */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Delayed>
      )}
    </div>
  );
}

export default Slider;
