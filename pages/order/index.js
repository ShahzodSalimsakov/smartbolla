import { MainLayout } from "../../components/MainLayout";
import { parseCookies } from "../../helpers/";
import React from "react";
import { Formik } from "formik";

function Order({ cookieData, mainLayoutSocial, orderData }) {
  const initialValues = {
    agreement: false,
  };

  if (initialValues.PAYMENTS) {
    initialValues.payment = orderData.PAYMENTS[0]["ID"];
  }

  if (orderData.PROPERTIES) {
    orderData.PROPERTIES.map((prop) => {
      initialValues[`prop_${prop.ID}`] = "";
    });
  }

  return (
    <MainLayout title={"Make order"} mainLayoutSocial={mainLayoutSocial}>
      <div className="grid grid-cols-3 mt-4">
        <div className="col-span-2 mr-5">
          <h2>Payment Information</h2>
          <div className="w-8/12 p-10 rounded-md shadow-md bg-white">
            <Formik
              initialValues={initialValues}
              validate={(values) => {
                const errors = {};

                if (!values.payment) {
                  errors.payment = "Payment must be chosen";
                }

                if (!values.agreement) {
                  errors.agreement = "You must agree to the agreement";
                }

                if (orderData.PROPERTIES) {
                  orderData.PROPERTIES.map((prop) => {
                    if (prop.REQUIRED == "Y" && !values[`prop_${prop.ID}`]) {
                      errors[
                        `prop_${prop.ID}`
                      ] = `Field "${prop.NAME}" must be filled`;
                    }
                  });
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
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
                  {Object.keys(errors).length > 0 && (
                    <div className="text-red-500">
                      {Object.values(errors).map((err) => (
                        <div>{err}</div>
                      ))}
                    </div>
                  )}
                  {orderData.PROPERTIES &&
                    orderData.PROPERTIES.map((prop) => {
                      if (prop.TYPE == "STRING") {
                        return (
                          <div className="mb-6">
                            <label
                              className="block mb-3 text-gray-600"
                              htmlFor=""
                            >
                              {prop.NAME}
                            </label>
                            <input
                              type="text"
                              name={`prop_${prop.ID}`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              defaultValue={initialValues[`prop_${prop.ID}`]}
                              autoComplete="off"
                              className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
                            />
                          </div>
                        );
                      }
                    })}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div>
          <h2>Order Summary</h2>
          <div className="p-10 rounded-md shadow-md bg-white text-black">
            <ul>
              <li>
                <b>Tokens count: </b> {orderData.TOKEN_COUNT}
              </li>
              <li>
                <b>Total summay: </b> ${orderData.ORDER_PRICE}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// export async function getStaticProps({ req }) {
//   const data = parseCookies(req);

//   console.log(data);

//   return {
//     cookieData: data && data,
//   };
// }

export async function getServerSideProps({ locale, req, res }) {
  const cookieData = parseCookies(req);

  if (res && !cookieData.cartItem) {
    res.writeHead(302, { Location: "/" });
    return res.end();
  }

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

  const resOrder = await fetch("http://localhost:3000/api/order", {
    method: "POST",
    body: JSON.stringify({
      method: "get.order.data",
      data: {
        productId: cookieData.cartItem,
        locale,
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
      orderData,
    },
  };
}

export default Order;
