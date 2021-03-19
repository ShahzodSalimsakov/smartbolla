import { MainLayout } from "../../components/MainLayout";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import styles from "./Profile.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { parseCookies } from "../../helpers/";
import { isMobile } from "react-device-detect";

function Profile({ mainLayoutSocial, balance }) {
  const { t } = useTranslation("profilePage");
  const profileBalance = t("balance");
  const accountSetings = t("accountSetings");
  const logOut = t("logOut");

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
      commonLang={commonLang}
      title={t("title")}
      mainLayoutSocial={mainLayoutSocial}
      footerLang={footerLang}
    >
      <div className={isMobile ? "col" : "grid grid-cols-3"}>
        <div className={isMobile ? "" : "col-span-2"}>
          <div>
            <div className="font-bold text-4xl py-5">{t("yourBalance")}</div>
            <div
              className={`${styles.tokenCount} bott flex-col items-center font-bold justify-center text-9xl`}
            >
              <span>{balance.TOKENS_COUNT}</span>
              <div className={`${styles.balanceColsText} font-bold text-4xl `}>
                {t("coins")}
              </div>
            </div>
          </div>
          <div>
            <div className="py-5 font-bold text-4xl">{t("tokenOrders")}</div>
            <table
              className={`${
                isMobile
                  ? styles.profileTable
                  : `${styles.profileTable} "table-fixed border-collapse w-full col"`
              }`}
            >
              <thead>
                <tr>
                  <th className="text-uppercase w-1/12">№</th>
                  <th className="text-uppercase w-1/6">{t("date")}</th>
                  <th className="text-uppercase w-1/6">{t("coins")}</th>
                  <th className="text-uppercase w-1/6">{t("price")}</th>
                  <th className="text-uppercase w-1/6">{t("status")}</th>
                  <th className="text-uppercase w-1/6">{t("action")}</th>
                </tr>
              </thead>
              <tbody>
                {balance.ORDERS &&
                  balance.ORDERS.map((order) => (
                    <tr>
                      <td>{order.ID}</td>
                      <td>{order.DATE_INSERT}</td>
                      <td>
                        {order.PROPERTIES.TOKEN_COUNTS.VALUE} {t("coins")}
                      </td>
                      <td>${+order.PRICE}</td>
                      <td>
                        {order.PAYED == "Y" ? (
                          <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {t("paid")}
                          </div>
                        ) : (
                          <div className="bg-red-400 font-semibold inline-flex leading-5 px-2 rounded-full text-red-900 text-xs">
                            {t("unpaid")}
                          </div>
                        )}
                      </td>
                      <td></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <ProfileMenu
            balance={profileBalance}
            accountSetings={accountSetings}
            logOut={logOut}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale, req, res }) {
  const cookieData = parseCookies(req);
  let authPage = "/auth";
  if (locale != "en") {
    authPage =
      "/" + locale + authPage + "?backUrl=" + "/" + locale + "/profile";
  }

  if (res && !cookieData.userAuthToken) {
    res.writeHead(302, { Location: authPage });
    return res.end();
  } else {
    const profileBalance = await fetch("https://smartbolla.com/api/", {
      method: "POST",
      body: JSON.stringify({
        method: "check.auth.token",
        data: {
          authToken: cookieData.userAuthToken,
        },
      }),
      headers: {
        ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
      },
    });

    const { data: tokenData } = await profileBalance.json();
    if (!tokenData.result) {
      res.writeHead(302, { Location: authPage });
      return res.end();
    }
  }

  const profileBalance = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.profile.balance",
      data: {
        authToken: cookieData.userAuthToken,
        locale: locale,
      },
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
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });
  let { data: balance } = await profileBalance.json();
  let { data: mainLayoutSocial } = await socials.json();
  return {
    props: {
      balance,
      mainLayoutSocial,
      ...(await serverSideTranslations(locale, ["profilePage"])),
    },
  };
}

export default Profile;
