import React from 'react';
import Link from 'next/link';

import styles from '../styles/Product.module.scss';

import { client, urlFor } from '../lib/client';

const Product = ({ product: {name, slug, price, brand, image} }) => {
    return (
        <Link href={`/product/${slug.current}`}>
            <div className={styles.product}>
                <img className={styles.product__image}src={urlFor(image && image[0])} alt='foto'/>
                <div className={styles.product__details}>
                    <p className={styles.product__details_brand}>{brand}</p>
                    <p className={styles.product__details_title}>{name}</p>
                    <p className={styles.product__details_price}>{price}</p>
                </div>
            </div>
        </Link>

    );
};

export default Product;


