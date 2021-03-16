import { MainLayout } from "../../components/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Formik, Field, Form } from "formik";

const mapData = {
  center: [25.068318, 55.145064],
  zoom: 17,
  avoidFractionalZoom: false,
};

const coordinates = [[25.068318, 55.145064]];

library.add(fab, faMapMarkerAlt, faPhoneAlt, faCircle);

function Contacts({ contactAddress, social }) {
  return (
    <MainLayout>
      <div className="mb-10">
        <YMaps>
          <Map width="100%" height="400px" defaultState={mapData}>
            {coordinates.map((coordinate) => (
              <Placemark geometry={coordinate} />
            ))}
          </Map>
        </YMaps>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="flex py-4">
            <div className="flex">
              <FontAwesomeIcon
                size="xs"
                icon={faMapMarkerAlt}
                className="mr-3 w-5 text-white"
              />
            </div>
            <div>{contactAddress.ADDRESS}</div>
          </div>
          <div className="flex py-4">
            <div className="flex">
              <FontAwesomeIcon
                size="xs"
                icon={faPhoneAlt}
                className="mr-3 w-5 text-white"
              />
            </div>
            <div
              className={styles.phoneLink}
              dangerouslySetInnerHTML={{ __html: contactAddress.PHONE }}
            />
          </div>
          <div className="py-2">
            {social.SOC_ICONS.map((item) => (
              <span key={item.LINK} className="nav-item social-icons">
                <span className={styles.faStack}>
                  <a target="_blank" href={item.LINK}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={styles.faStack2x}
                    />
                    <FontAwesomeIcon
                      size="xs"
                      icon={["fab", item.ICON]}
                      className={`${styles.faStack1x} text-white`}
                    />
                  </a>
                </span>
              </span>
            ))}
          </div>
        </div>
        <div>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Provide a reply-to e-mail address.";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.name) {
                errors.name = "Please type your name.";
              }
              if (!values.message) {
                errors.message = "The message text is required.";
              }
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
              <form onSubmit={handleSubmit}>
                <div className="text-red-500">
                  {errors.name && touched.name && errors.name}
                </div>
                <div className="text-red-500">
                  {errors.email && touched.email && errors.email}
                </div>
                <div className="text-red-500">
                  {errors.message && touched.message && errors.message}
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={`${styles.formControlInput} mb-3`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`${styles.formControlInput} mb-3`}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className={`${styles.formControlTextarea} mb-3`}
                />
                <button
                  type="submit"
                  className={styles.formControlSubmitButton}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
  const res = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.contact.address",
      data: {
        locale: locale,
      }
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });
  let { data: contactAddress } = await res.json();

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
  let { data: social } = await socials.json();

  return {
    props: {
      contactAddress,
      social,
    },
  };
}

export default Contacts;
