import React, { useState } from 'react';
import Sizes from '../../components/Sizes';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/cartSlice';

import styles from '../../styles/Product_page.module.scss';

import { client, urlFor } from '../../lib/client';


export const getServerSideProps = async (context) => {
    const { slug } = context.params;
    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(productQuery);

    return {
        props: {
            product: product,
        }
    }
}

const ProductPage = ({ product }) => {
    const dispatch = useDispatch();
    const stateItem = useSelector((state) => state);
    console.log(stateItem);
    const { name, price, sizes, sex, desription, typeOfProduct, image } = product;
    const [index, setIndex] = useState(0);

    return (
        <div className={styles.product}>
            <div className='container'>
                <div className={styles.product__inner}>
                    
                    <div className={styles.product__slider}>
                        <div className={styles.product__slider_container}>
                            <img className={styles.product__slider_image} src={urlFor(image && image[index])}/>
                        </div>

                        <div className={styles.product__slider_small_container}>
                            {
                                image?.map((item, i) => (
                                    <img 
                                        className={i === index ? styles.product__slider_selectImgSmall : styles.product__slider_smallImg}
                                        onMouseEnter={() => setIndex(i)}
                                        src={urlFor(item)}
                                        key={i}
                                    />
                                ))
                            }
                        </div>
                    </div>



                    <div className={styles.product__info}>
                        <h2 className={styles.product__info_title}>{name}</h2>
                        <p className={styles.product__info_category}>{sex} {typeOfProduct}</p>
                        <p className={styles.product__info_price}>{price} руб</p>
                        <div className={styles.product__sizes}>
                            <ul className={styles.product__sizes_list}>
                                {
                                    sizes?.map((item, i) => (
                                        <li key={i}>
                                            <Sizes size={item} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <button className={styles.product__addCart_btn} onClick={() => dispatch(addItem({ product }))}>добавить в корзину</button>
                        <p className={styles.product__info_text}>{desription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;