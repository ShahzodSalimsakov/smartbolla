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
import chunk from "../../helpers/chunk";
SwiperCore.use([EffectCoverflow, Navigation, Lazy, Autoplay]);

function Slider({ slides }) {
  const { ref, inView } = useInView();
  const resSlides = chunk(slides, 8);
  return (
    <div ref={ref}>
      {InView && (
        <Delayed>
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            pagination
            clickable={true}
            grabCursor={true}
            navigation
            // autoplay={{
            //   delay: 3000,
            // }}
          >
            {resSlides.map((item, i) => {
              const rows = chunk(item, 4);
              return (
                <SwiperSlide key={i} className="w-screen">
                  {rows.map((
                    row,
                    rowIndex // Davay v botim, chtobi rasskazal ideyu
                  ) => (
                    <div
                      className={`flex justify-center ${
                        rowIndex == 0
                          ? "mb-5"
                          : "left-20 position-relative"
                      }`}
                      key={rowIndex}
                    >
                      {row.map((slide) => (
                        <div className="col-2">
                          <Image
                            src={
                              slide.PREVIEW_PICTURE
                                ? `${slide.PREVIEW_PICTURE}`
                                : "/"
                            }
                            width={500}
                            height={500}
                          />
                          <div>{slide.NAME}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Delayed>
      )}
    </div>
  );
}

export default Slider;