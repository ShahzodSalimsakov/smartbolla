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

function Slider({ slides, locale }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}>
      {InView && (
        <Delayed>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            navigation
            preloadImages={false}
            autoplay={{
              delay: 2000,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 20,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="">
                  <Image
                    src={item.PREVIEW_PICTURE ? `${item.PREVIEW_PICTURE}` : "/"}
                    width={320}
                    height={320}
                  />
                  {/* <img src={item.PREVIEW_PICTURE} /> */}
                  <h1 className="font-extralight mt-1 text-base">
                    {item.NAME}
                  </h1>
                  <div className="">
                    <div className="text-base font-medium tracking-wide mt-1">
                      {item[`PROPERTY_POSITION_NEW_PROPERTY_${locale}_VALUE`]}
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
