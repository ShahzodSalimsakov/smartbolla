import Image from "next/image";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider({ slides }) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={2}
      slidesPerView={4}
      pagination
      navigation
      preloadImages={false}
      lazy={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 40,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
    >
      {slides.map((item) => (
        <SwiperSlide key={item.ID}>
          <div className="w-10/12">
            <Image
              src={item.PREVIEW_PICTURE ? `${item.PREVIEW_PICTURE}` : "/"}
              width={200}
              height={200}
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
  );
}

export default Slider;
