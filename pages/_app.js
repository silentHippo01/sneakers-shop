import Head from 'next/head'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import '../styles/globals.scss'
import store from '../store/store'


const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>

)

export default MyApp
