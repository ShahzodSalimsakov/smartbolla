import { MainLayout } from "../../components/MainLayout";
import AboutPage from "../../components/AboutPage/AboutPage";
import React from "react";
import Slider from "../../components/Slider/Slider";

function About({ aboutText, mainLayoutSocial }) {
  return (
    <MainLayout title={"About"} mainLayoutSocial={mainLayoutSocial}>
      <AboutPage aboutText={aboutText}/>
      <Slider slides={teamData} />
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {

  const aboutPage = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.about.text",
      data: {
        locale: locale,
      }
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const socials = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "social.links",
      data: {
        locale: locale,
      }
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  let { data: aboutText, } = await aboutPage.json();
  let { data: mainLayoutSocial, } = await socials.json();

  return {
    props: {
      aboutText,
      mainLayoutSocial,
    },
  };
}

export default About;
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
