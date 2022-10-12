import Head from 'next/head'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import '../styles/globals.scss'
import '../styles/reset.scss'
import store, {persistor} from '../store/store'
import "slick-carousel/slick/slick.css"; 

import { PersistGate } from 'redux-persist/integration/react';


// if (typeof window !== 'undefined') {
//   localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : localStorage.setItem("cart", JSON.stringify([]));
// }

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Layout>
  </Provider>

)

export default MyApp
