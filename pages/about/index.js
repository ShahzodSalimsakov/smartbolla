import { MainLayout } from "../../components/MainLayout";
import TeamPage from "../../components/TeamPage/TeamPage";
import AboutPage from "../../components/AboutPage/AboutPage";
import React from "react";

function About({ aboutText, mainLayoutSocial }) {
  return (
    <MainLayout title={"About"} mainLayoutSocial={mainLayoutSocial}>
      <AboutPage aboutText={aboutText}/>
      <TeamPage />
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