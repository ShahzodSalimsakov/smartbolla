import "../styles/main.scss";
import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { AnimateSharedLayout } from "framer-motion";
import store from "../store/store";
import { appWithTranslation } from 'next-i18next'

const app = function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AnimateSharedLayout>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(appWithTranslation(app));
