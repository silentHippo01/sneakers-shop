import Image from 'next/image'
import styles from '../styles/page_style/Home.module.scss'
import Product from '../components/Product'
import { client, urlFor } from '../lib/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home({ recommendations, banners }) {
  const items = banners.map((elem, index) => (
    <img src={urlFor(elem.image[0])} key={index} />
    // <Image src={urlFor(elem.image[0])} key={index} widht={1000} height={500}/>
  ))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
}
  return (
    <main className='home'>
      <div className='container'>
        <div className={styles.home__inner}>
          <div className={styles.home__banner}>
            <Slider {...settings}>
              {
                items.map((item) => (
                  item
                ))
              }
            </Slider>
          </div>

          <h1 className={styles.home__title}>рекомендуем</h1>
          <div className={styles.home__catalog}>
            {
              recommendations?.map((elem) => {
                if (elem.recommendations === true) {
                  return <Product product={elem} key={elem._id} />;
                }
              }
              )
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "shoes"]';
  const recommendations = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "MainPageBanner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { recommendations, banners }
  }
}
