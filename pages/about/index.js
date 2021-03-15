import { MainLayout } from "../../components/MainLayout";
import AboutPage from "../../components/AboutPage/AboutPage";
import React from "react";
import Slider from "../../components/Slider/Slider";

export default function About() {
  return (
    <MainLayout title={"About"}>
      <AboutPage />
      <Slider slides={teamData} />
    </MainLayout>
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
