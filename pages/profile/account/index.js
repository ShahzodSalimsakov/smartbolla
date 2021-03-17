import { MainLayout } from "../../../components/MainLayout";
import styles from "../Profile.module.css";
import { Formik, Field, Form } from "formik";
import ProfileMenu from "../../../components/ProfileMenu/ProfileMenu";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Account({ orderProps, mainLayoutSocial }) {
  const { t } = useTranslation("accountPage");
  const balance = t("balance");
  const accountSetings = t("accountSetings");
  const logOut = t("logOut");
  
  const commonLang = {
    about: t('about'),
    media: t('media'),
    contact: t('contact'),
    profile: t('profile'),
  }
  const renderField = (field, values) => {
    console.log(field.NAME);
    switch (field.TYPE) {
      default:
        if (field.CODE == "NAME") {
          field.NAME = t("NAME");
        }
        if (field.CODE == "LAST_NAME") {
          field.NAME = t("LAST_NAME");
        }
        if (field.CODE == "PHONE") {
          field.NAME = t("PHONE");
        }
        if (field.CODE == "PASPORT") {
          field.NAME = t("PASPORT");
        }
        return (
          <input
            type="text"
            name={field.CODE.toLowerCase()}
            id={field.CODE}
            required
            defaultValue={values[field.CODE.toLowerCase()]}
            className="text-black w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        );
        break;
    }
  };

  return (
    <MainLayout commonLang={commonLang} title={t("title")} mainLayoutSocial={mainLayoutSocial}>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={(values) => {
              const errors = {};
              orderProps.map((prop) => {
                if (prop.CODE == "NAME") {
                  prop.NAME = t("NAME");
                }
                if (prop.CODE == "LAST_NAME") {
                  prop.NAME = t("LAST_NAME");
                }
                if (prop.CODE == "PHONE") {
                  prop.NAME = t("PHONE");
                }
                if (prop.CODE == "PASPORT") {
                  prop.NAME = t("PASPORT");
                }
                if (prop.REQUIRED == "Y" && !values[prop.CODE.toLowerCase()]) {
                  errors[
                    prop.CODE.toLowerCase()
                  ] = `Field "${prop.NAME}" is required`;
                }
              });
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const res = await fetch("https://smartbolla.com/api/", {
                  method: "POST",
                  body: JSON.stringify({
                    method: "submit.contact.feedback",
                    data: values,
                  }),
                  headers: {
                    ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
                  },
                });

                setSubmitting(false);
              } catch (error) {
                console.log(error);
              }
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
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="pt-4 w-7/12">
                <div className="text-red-500">
                  {errors.name && touched.name && errors.name}
                </div>
                <div className="text-red-500">
                  {errors.email && touched.email && errors.email}
                </div>
                {orderProps.map((prop) => (
                  <div className="mb-6" key={prop.ID}>
                    <label
                      htmlFor={prop.CODE}
                      className="block mb-2 text-sm text-white-600 dark:text-white-400"
                    >
                      {prop.NAME}
                    </label>
                    {renderField(prop, values)}
                  </div>
                ))}
                <div className="mb-6">
                  <button
                    type="submit"
                    className={`${styles.accountSubmitButton} text-uppercase`}
                    disabled={isSubmitting}
                  >
                    {t("submit")}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div>
          <ProfileMenu
            balance={balance}
            accountSetings={accountSetings}
            logOut={logOut}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
  const res = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.order.properties",
      data: {
        userId: 5,
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

  let { data: mainLayoutSocial } = await socials.json();

  let { data: orderProps } = await res.json();
  orderProps = orderProps || [];

  return {
    props: {
      orderProps,
      mainLayoutSocial,
      ...(await serverSideTranslations(locale, ["accountPage"])),
    },
  };
}

export default Account;
