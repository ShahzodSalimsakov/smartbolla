import { MainLayout } from "../../components/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PhoneInput from "react-phone-input-2";
import React from "react";
import { Formik } from "formik";
import "react-phone-input-2/lib/style.css";

function AuthPage({ mainLayoutSocial }) {
  const { t } = useTranslation("common");
  const commonLang = {
    about: t("about"),
    media: t("media"),
    contact: t("contact"),
    profile: t("profile"),
  };
  return (
    <MainLayout
      title={"Auth page"}
      commonLang={commonLang}
      mainLayoutSocial={mainLayoutSocial}
    >
      <div>Auth Page</div>
      <Formik
        initialValues={{ phone: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.phone) {
            errors.phone = "Phone must be filled";
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await fetch("/api/auth", {
            method: "POST",
            body: JSON.stringify({
              method: "phone.auth.send.sms",
              data: {
                USER_PHONE_NUMBER: values.phone,
                AUTH_FORM: "Y",
                TYPE: "AUTH",
                POPUP_AUTH: "N",
                AUTH_PHONE_OR_LOGIN: values.phone,
                Login: "Y",
                Login1: "Y",
              },
            }),
            headers: {
              ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
            },
          });

          const { data } = await res.json();
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <PhoneInput
              country={"us"}
              value={values.phone}
              inputProps={{
                name: "phone",
              }}
              onChange={(phone, rer, e) => {
                handleChange(e);
              }}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <button type="submit">Sign in</button>
          </form>
        )}
      </Formik>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
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

  let { data: mainLayoutSocial } = await socials.json();

  return {
    props: {
      mainLayoutSocial,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default AuthPage;
