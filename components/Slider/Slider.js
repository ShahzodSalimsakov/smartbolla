import Image from "next/image";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Lazy,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import InView, { useInView } from "react-intersection-observer";
import Delayed from "../Delayed/Delayed";
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Lazy]);

function Slider({ slides }) {
  const { ref, inView } = useInView();
  console.log("inView", inView);
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
            pagination
            navigation
            preloadImages={false}
            activeSlideKey={5}
            lazy={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 70,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="text-center w-8/12">
                  <Image
                    src={item.PREVIEW_PICTURE ? `${item.PREVIEW_PICTURE}` : "/"}
                    width={150}
                    height={150}
                  />
                  {/* <img src={item.PREVIEW_PICTURE} /> */}
                  <h1 className="leading-none font-extralight mt-1 text-2xl">
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
