import { MainLayout } from "../../components/MainLayout";
import AboutPage from "../../components/AboutPage/AboutPage";
import React from "react";
import Slider from "../../components/Slider/Slider";

export default function About({ team }) {
  console.log(team)
  return (
    <MainLayout title={"About"}>
      <AboutPage />
      <Slider slides={team} />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const resTeam = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.team.list",
      data: {
        locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  let { data: team } = await resTeam.json();

  return {
    props: {
      team,
    },
  };
}
