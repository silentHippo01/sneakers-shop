import styles from '../styles/Home.module.scss'

import Product from '../components/Product'
import { client } from '../lib/client'

export default function Home({ products }) {
  return (
    <main className='home'>
      <div className='container'>
         <div className={styles.home__inner}>
            <div className={styles.home__banner}></div>
            <h1 className={styles.home__title}>рекомендуем</h1>
            <div className={styles.home__catalog}>
              {
                products?.map((product) => (
                  <Product product={product} key={product._id} />
                ))
              }
            </div>
         </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  return {
    props: { products }
  }
}
