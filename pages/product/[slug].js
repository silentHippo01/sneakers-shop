import React, { useEffect, useRef, useState } from 'react';
import { PortableText } from '@portabletext/react';
import Slider from "react-slick";
// import Sizes from '../../components/Sizes';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/cartSlice';

import styles from '../../styles/page_style/Product_page.module.scss';

import { client, urlFor } from '../../lib/client';
import { current } from '@reduxjs/toolkit';
import SizeGrid from '../../components/SizeGrid';
import ProductSmall from '../../components/ProductSmall';


export const getServerSideProps = async (context) => {
    const { slug } = context.params;
    // const productQuery = `*[_type == 'shoes' && slug.current == '${slug}'][0]`;
    const productQuery = `*[slug.current == '${slug}'][0]`;
    const product = await client.fetch(productQuery);

    const accessoriesQuery = `*[_type == 'accessories']`;
    const accessories = await client.fetch(accessoriesQuery);

    return {
        props: {
            product: product,
            accessories: accessories,
        }
    }
}

//context - объект, у которого одно поле slug

const ProductPage = ({ product, accessories }) => {
    const dispatch = useDispatch();
    const stateItem = useSelector((state) => state);

    const { _id, name, price, discount, sizes, sex, description, characteristics, typeOfProduct, image } = product;
    const [index, setIndex] = useState(0);

    const [chooseSize, setSize] = useState(sizes ? sizes[0] : '');
    const [qty, setQty] = useState(1);
    const itemCart = { name, price, image, chooseSize, qty, _id, typeOfProduct };

    const [showSizeGrid, toggleSizeGrid] = useState(false);

    const chooseQuantity = (qty) =>{
        if(qty < 1){
            return;
        } else{
            setQty(qty);
        }
    }


    const addToCart = (itemCart) => {
        dispatch(addItem({ itemCart }));
    }

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        className: 'test',
    }

    return (
        <div className={styles.product}>
            <div className='container'>
                <div className={styles.product__inner}>
                    <div className={styles.product__slider}>
                        <div className={styles.product__slider_container}>
                            <img className={styles.product__slider_image} src={urlFor(image && image[index])} />
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
                        {
                            discount ? <p className={styles.product__info_disc}><span className={styles.product__info_oldPrice}>{price}</span> - скидка {discount} </p> : ''
                        }
                        <p className={discount ? styles.product__info_price_discount : styles.product__info_price}>{discount > 0 ? Math.round(price - (price / 100 * discount)) : price} руб</p>
                        <div className={styles.product__sizes}>
                               <ul className={styles.product__sizes_list}>
                                    {
                                        sizes?.map((item, index) => (
                                            <li className={styles.product__sizes_item} key={index}>
                                                <button 
                                                    className={chooseSize === item ? styles.product__sizes_active_btn : styles.product__sizes_btn} 
                                                    value={item} 
                                                    onClick={(e) => setSize(e.target.value)}>{item}
                                                </button>
                                            </li>
                                        ))
                                    }
                               </ul>
                        </div>

                        <div className={styles.product__quantity}>
                            <div className={styles.product__quantity_minus} onClick={() => chooseQuantity(qty - 1)}></div>
                            <p className={styles.product__quantity_count}>{qty}</p>
                            <div className={styles.product__quantity_plus} onClick={() => chooseQuantity(qty + 1)}></div>
                        </div>
                        <h3 className={styles.product__sizeGrid} onClick={() => toggleSizeGrid(true)}>
                            Размерная сетка
                        </h3>

                        <button className={styles.product__addCart_btn} onClick={() => addToCart(itemCart) }>добавить в корзину</button>
                        {/* addItem({ itemCart }) */}
                       {
                            description ?  <p className={styles.product__info_text}>{description}</p> : null 
                       }
                       
                       {
                           characteristics ? <div className={styles.product__info_characteristics}><PortableText value={characteristics}/></div> : null 
                       }
                    </div>

                    {
                        showSizeGrid && <SizeGrid close={toggleSizeGrid} />
                    }
                </div>
                <div className={styles.product__accessories}>
                    <h3 className={styles.product__accessories_title}>Возможно вас заинтересует</h3>
                    <div className={styles.product__accessories_content}>
                        <Slider {...sliderSettings}>
                            {
                               accessories.map((item, index) => (
                                    <ProductSmall product={item} key={index}/>
                               ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;