import { MainLayout } from "../../components/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";
import { Formik } from "formik";
import { useCookies } from "react-cookie";
import "react-phone-input-2/lib/style.css";
import styles from "./Auth.module.css";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

let timerInvetval = null;
let intervalTime = 60;

function AuthPage({ mainLayoutSocial }) {
  const { t } = useTranslation("authPage");
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

  const [submitErrors, setSubmitError] = useState("");

  const [isSmsCode, setIsSmsCode] = useState(false);

  const [submitData, setSubmitData] = useState({});

  const [smsTimer, setSmsTimer] = useState(0);

  const [filledPhone, setFilledPhone] = useState("");

  const [isAjaxLoading, setIsAjaxLoading] = useState(false);

  const [userAuthToken, setUserAuthToken] = useCookies(["userAuthToken"]);

  const router = useRouter();

  const { backUrl } = router.query;

  const startTimer = () => {
    intervalTime = 60;
    setSmsTimer(intervalTime);
    timerInvetval = setInterval(() => {
      intervalTime--;
      setSmsTimer(intervalTime);
      if (intervalTime == 0) {
        clearInterval(timerInvetval);
      }
    }, 1000);
  };

  const sendSmsCodeRequest = async (phone) => {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        method: "phone.auth.send.sms",
        data: {
          USER_PHONE_NUMBER: phone,
          AUTH_FORM: "Y",
          TYPE: "AUTH",
          POPUP_AUTH: "N",
          AUTH_PHONE_OR_LOGIN: phone,
          Login: "Y",
          Login1: "Y",
          phone: phone,
        },
      }),
      headers: {
        ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
      },
    });

    const { data, error } = await res.json();

    if (error) {
      setSubmitError(error);
    } else if (data) {
      setSubmitData(data);
      startTimer();
      setIsSmsCode(data.SHOW_SMS_FIELD);
    }
  };

  return (
    <MainLayout
      title={t("title")}
      commonLang={commonLang}
      mainLayoutSocial={mainLayoutSocial}
      footerLang={footerLang}
    >
      <div
        className={`${isAjaxLoading ? styles.isAuthLoading : ""} ${
          isMobile
            ? "col col-11 h-screen"
            : "items-center mt-16 mx-auto text-center w-5/12 relative"
        } `}
      >
        {!isSmsCode && (
          <Formik
            initialValues={{ phone: "" }}
            validate={(values) => {
              const errors = {};

              if (!values.phone) {
                errors.phone = t("phoneFilled");
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setIsAjaxLoading(true);
              setSubmitError("");
              setFilledPhone(values.phone);
              await sendSmsCodeRequest(values.phone);
              setSubmitting(false);
              setIsAjaxLoading(false);
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
              <form className="mt-4" onSubmit={handleSubmit}>
                {submitErrors.length > 0 && (
                  <div className="text-red-500">{submitErrors}</div>
                )}
                {Object.keys(errors).length > 0 && (
                  <div className="text-red-500">
                    {Object.values(errors).map((err) => (
                      <div>{err}</div>
                    ))}
                  </div>
                )}
                <div className="mb-6 text-black">
                  <label className="block mb-3 text-white" htmlFor="">
                    {t("typingPhone")}
                  </label>
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
                </div>
                <div className="mb-6">{t("authRegText")}</div>
                <button
                  type="submit"
                  className={styles.formControlSubmitButton}
                >
                  {t("signIn")}
                </button>
              </form>
            )}
          </Formik>
        )}
        {isSmsCode && (
          <div>
            <div className="alert alert-success compact">{t("sendSms")}</div>
            <Formik
              initialValues={{ code: "" }}
              validate={(values) => {
                const errors = {};

                if (!values.code) {
                  errors.code = t("smsFilled");
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitError("");
                setIsAjaxLoading(true);
                const res = await fetch("/api/authCode", {
                  method: "POST",
                  body: JSON.stringify({
                    method: "phone.auth.send.sms",
                    data: {
                      USER_PHONE_NUMBER: filledPhone,
                      AUTH_FORM: "Y",
                      TYPE: "AUTH",
                      POPUP_AUTH: "N",
                      AUTH_PHONE_OR_LOGIN: filledPhone,
                      Login: "Y",
                      Login1: "Y",
                      phone: filledPhone,
                      SMS_CODE: values.code,
                      SIGNED_DATA: submitData.SIGNED_DATA,
                    },
                  }),
                  headers: {
                    ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
                  },
                });

                const { data, error } = await res.json();

                if (error) {
                  setSubmitError(error);
                } else if (data) {
                  if (data.AUTH_TOKEN) {
                    setUserAuthToken("userAuthToken", data.AUTH_TOKEN);
                    if (backUrl) {
                      return router.push(backUrl, undefined, {
                        shallow: true,
                      });
                    } else {
                      return router.push("/", undefined, {
                        shallow: true,
                      });
                    }
                  } else {
                    setSubmitError(t("incorrectCode"));
                  }
                  setIsSmsCode(data.SHOW_SMS_FIELD);
                  setSubmitData(data);
                }

                setSubmitting(false);
                setIsAjaxLoading(false);
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
                <>
                  <form className="mt-4" onSubmit={handleSubmit}>
                    {submitErrors.length > 0 && (
                      <div className="text-red-500">{submitErrors}</div>
                    )}
                    {Object.keys(errors).length > 0 && (
                      <div className="text-red-500">
                        {Object.values(errors).map((err) => (
                          <div>{err}</div>
                        ))}
                      </div>
                    )}
                    <div className="mb-6">
                      <label className="block mb-3" htmlFor="">
                        {t("codeFromSms")}
                      </label>
                      <input
                        type="text"
                        name="code"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.code}
                        className="bg-gray-700 border-b-2 outline-none p-3 rounded text-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className={styles.formControlSubmitButton}
                    >
                      {t("signIn")}
                    </button>
                  </form>
                  {smsTimer > 0 && (
                    <div>
                      {t("resendCode")} {smsTimer} {t("resendCodeSek")}.
                    </div>
                  )}
                  {smsTimer == 0 && (
                    <div
                      onClick={() => {
                        sendSmsCodeRequest(filledPhone);
                      }}
                      className="cursor-pointer text-green-300 underline"
                    >
                      {t("sendCode")}
                    </div>
                  )}
                </>
              )}
            </Formik>
          </div>
        )}
      </div>
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
      ...(await serverSideTranslations(locale, ["authPage"])),
    },
  };
}

export default AuthPage;
