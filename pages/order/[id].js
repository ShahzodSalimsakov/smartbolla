import { MainLayout } from "../../components/MainLayout";
import { parseCookies } from "../../helpers/";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function OrderPayment({ mainLayoutSocial, orderData }) {
  const { t } = useTranslation("profilePage");
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
      footerLang={footerLang}
      title={"Order Detail"}
      mainLayoutSocial={mainLayoutSocial}
    >
      <div>
        {orderData.ORDER && (
          <>
            <div className="py-6">
              Your order № {orderData.ORDER.ID} of {orderData.ORDER.DATE_INSERT}{" "}
              has been created successfully.
            </div>

            <h2>Order Payment</h2>
            <div
              className="w-2/12"
              dangerouslySetInnerHTML={{
                __html: orderData.PAY_SYSTEM.BUFFERED_OUTPUT,
              }}
            ></div>
          </>
        )}
        {!orderData.ORDER && <h3>Order is not found</h3>}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale, req, query }) {
  const cookieData = parseCookies(req);
  const { id } = query;

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

  const resOrder = await fetch("https://api.smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.existing.order.data",
      data: {
        locale,
        authToken: cookieData.userAuthToken,
        id,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  let { data: orderData } = await resOrder.json();

  let { data: mainLayoutSocial } = await socials.json();
  return {
    props: {
      mainLayoutSocial,
      cookieData,
      orderData: orderData.data,
      authToken: cookieData.userAuthToken,
      productId: cookieData.cartItem,
      ...(await serverSideTranslations(locale, ["profilePage"])),
    },
  };
}

export default OrderPayment;
