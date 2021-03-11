import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/core";
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

function Team() {
  const teamItems = teamData.map((team) => (
    <SwiperSlide>
      <div className="md:p-8 p-2">
        <Image
          className="w-full"
          src={team.photoLink}
          width={500}
          height={500}
        />
        <h1 className="leading-none text-xl mt-1 capitalize truncate text-white">
          {team.name}
        </h1>
        <div className="max-w-full">
          <div className="text-base font-medium tracking-wide mt-1 text-white">
            {team.description}
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div>
      <div className="text-center text-2xl pt-2 m-6">Team</div>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 1000 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">{teamItems}</div>
      </Swiper>
    </div>
  );
}

const teamData = [
  {
    name: "Shahzod",
    description: "Developer",
    photoLink:
      "https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg",
  },
  {
    name: "Davron",
    description: "Developer",
    photoLink:
      "https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg",
  },
  {
    name: "Bekzod",
    description: "Developer",
    photoLink:
      "https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg",
  },
  {
    name: "Nuriddin",
    description: "Developer",
    photoLink:
      "https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg",
  },
  {
    name: "Abdurahmon",
    description: "Developer",
    photoLink:
      "https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg",
  },
  {
    name: "Doniyor",
    description: "Developer",
    photoLink:
      "https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg",
  },
];

export default Team;
