// import '../styles/main.css'
import "tailwindcss/tailwind.css";
import 'swiper/swiper.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Provider} from "react-redux";
import {createWrapper} from 'next-redux-wrapper';
import store from '../store/store'


const app = function MyApp({Component, pageProps}) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>)
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(app);