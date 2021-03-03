// import '../styles/main.css'
import "tailwindcss/tailwind.css";
import {Provider} from "react-redux";
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store'



const app =  function MyApp({ Component, pageProps }) {
  return  (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>)
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default  wrapper.withRedux(app);