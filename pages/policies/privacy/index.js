import { MainLayout } from "../../../components/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Privacy({mainLayoutSocial}) {
    const { t } = useTranslation("common");

    const commonLang = {
      about: t("about"),
      media: t("media"),
      contact: t("contact"),
      profile: t("profile"),
      investors: t("investors"),
      policies: t("policies"),
    };
  return (
    <MainLayout
      title={t("title")}
      commonLang={commonLang}
      mainLayoutSocial={mainLayoutSocial}
    >
      Privacy page
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {

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

  let { data: mainLayoutSocial } = await socials.json();

  return {
    props: {
      mainLayoutSocial,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}