import { MainLayout } from "../../components/MainLayout";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Investors({ aboutText, mainLayoutSocial, investors }) {
  const { t } = useTranslation("aboutPage");

  const commonLang = {
    about: t("about"),
    media: t("media"),
    contact: t("contact"),
    profile: t("profile"),
  };

  const footerLang = {
    allRightsRes: t("allRightsRes"),
    weWoldLike: t("weWoldLike"),
  };
  return (
    <MainLayout
      title={t("title")}
      commonLang={commonLang}
      footerLang={footerLang}
      mainLayoutSocial={mainLayoutSocial}
    >
      <FullPageSectionTitle title={translation("investors")} />
      <div className="w-10/12 m-auto">
        <Slider slides={investors} />
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
  const res = await fetch("https://api.smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.investor.list",
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

  let { data: investors } = await res.json();
  let { data: mainLayoutSocial } = await socials.json();
  investors = investors || [];
  investors = investors
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return {
    props: {
      investors,
      mainLayoutSocial,
      ...(await serverSideTranslations(locale, ["aboutPage"])),
    },
  };
}

export default Investors;
