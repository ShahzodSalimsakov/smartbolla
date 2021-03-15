import Image from "next/image";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider({ slides }) {
  console.log(slides);
  const Items = slides.map((item) => (
    <SwiperSlide>
      <div className="md:p-8 p-2">
        <Image src={`${item.PREVIEW_PICTURE}`} width={200} height={200} />
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
  ));
  return (
    <div className="p-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={5}
        slidesPerView={4}
        pagination
        navigation
        autoplay={{ delay: 500 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">{Items}</div>
      </Swiper>
    </div>
  );
}

export default Slider;
