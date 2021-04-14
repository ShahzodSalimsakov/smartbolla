import { MainLayout } from "../../components/MainLayout";
import AboutPage from "../../components/AboutPage/AboutPage";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Slider from "../../components/Slider/Slider";
import { useRouter } from "next/router";
import FullPageSectionTitle from "../../components/FullPageSectionTitle/FullPageSectionTitle";

function About({ aboutText, mainLayoutSocial, team, cofounder }) {
  const { t } = useTranslation("aboutPage");
  const { t: translation } = useTranslation("indexPage");

  const commonLang = {
    about: t("about"),
    media: t("media"),
    contact: t("contact"),
    profile: t("profile"),
    investors: t("investors"),
  };

  const footerLang = {
    allRightsRes: t("allRightsRes"),
    weWoldLike: t("weWoldLike"),
  };

  const router = useRouter();
  const locale = router.locale.toUpperCase();
  return (
    <MainLayout
      title={t("title")}
      commonLang={commonLang}
      footerLang={footerLang}
      mainLayoutSocial={mainLayoutSocial}
    >
      <AboutPage aboutText={aboutText} />

      <FullPageSectionTitle title={translation("cofounders")} />
      <div className="m-auto">
        <Slider slides={cofounder} locale={locale} />
      </div>

      <FullPageSectionTitle title={translation("team")} />
      <div className="m-auto">
        <Slider slides={team} locale={locale} />
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
  const aboutPage = await fetch("https://api.smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.about.text",
      data: {
        locale: locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const socials = await fetch("https://api.smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "social.links",
      data: {
        locale: locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const resCoFounder = await fetch("https://api.smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.cofounder.list",
      data: {
        locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  const resTeam = await fetch("https://api.smartbolla.com/api/", {
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

  let { data: aboutText } = await aboutPage.json();
  let { data: mainLayoutSocial } = await socials.json();
  let { data: cofounder } = await resCoFounder.json();
  let { data: team } = await resTeam.json();

  return {
    props: {
      aboutText,
      mainLayoutSocial,
      ...(await serverSideTranslations(locale, ["aboutPage"])),
      cofounder,
      team,
    },
  };
}

export default About;
