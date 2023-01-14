import Image from 'next/image'
import Link from 'next/link';

import styles from '../styles/Product.module.scss';

import { client, urlFor } from '../lib/client';

const Product = ({ product: { name, slug, price, discount, brand, image  } }) => {
    return (
        <Link href={`/product/${slug.current}`}>
            <div className={styles.product}>
                {
                    discount > 0
                        ?
                        <span className={styles.product__label_discount}>
                            -{discount}%
                        </span>
                        :
                        ''

                }
                <img className={styles.product__image} src={urlFor(image && image[0])} alt='foto' />
                <div className={styles.product__details}>
                    <p className={styles.product__details_brand}>{brand}</p>
                    <p className={styles.product__details_title}>{name}</p>
                    {
                        discount > 0
                            ?
                            <p><span className={styles.product__details_oldPrice}>{price}</span> <span className={styles.product__details_price}>{Math.round(price - (price / 100 * discount))}</span></p>
                            :
                            <p className={styles.product__details_price}>{price}</p>
                    }

                </div>
            </div>
        </Link>

    );
};

export default Product;


