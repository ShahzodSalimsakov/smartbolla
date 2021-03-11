import { MainLayout } from "../../components/MainLayout";
import TeamPage from "../../components/TeamPage/TeamPage";
import AboutPage from "../../components/AboutPage/AboutPage";
import React from "react";

export default function About() {
  return (
    <MainLayout title={"About"}>
      <AboutPage />
      <TeamPage />
    </MainLayout>
  );
}
