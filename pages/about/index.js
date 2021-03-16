import { MainLayout } from "../../components/MainLayout";
import AboutPage from "../../components/AboutPage/AboutPage";
import React from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function About({ aboutText, mainLayoutSocial }) { 
  const { t } = useTranslation('aboutPage');
  return (
    <MainLayout title={t('title')} mainLayoutSocial={mainLayoutSocial}>
      <AboutPage aboutText={aboutText}/>
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
      ...await serverSideTranslations(locale, ['aboutPage']),
    },
  };
}

export default About;