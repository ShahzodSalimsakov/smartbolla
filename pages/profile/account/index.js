import { MainLayout } from "../../../components/MainLayout";
import { Formik, Field, Form } from "formik";

function Account({ orderProps, mainLayoutSocial }) {
  const renderField = (field, values) => {
    switch (field.TYPE) {
      default:
        return (
          <input
            type="text"
            name={field.CODE.toLowerCase()}
            id={field.CODE}
            placeholder=""
            required
            defaultValue={values[field.CODE.toLowerCase()]}
            className="text-black w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          />
        );
        break;
    }
  };

  return (
    <MainLayout title={"Account settings"} mainLayoutSocial={mainLayoutSocial}>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={(values) => {
              const errors = {};
              orderProps.map((prop) => {
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
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      {prop.NAME}
                    </label>
                    {renderField(prop, values)}
                  </div>
                ))}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div></div>
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

  console.log(orderProps);
  return {
    props: {
      orderProps,
      mainLayoutSocial,
    },
  };
}

export default Account;
