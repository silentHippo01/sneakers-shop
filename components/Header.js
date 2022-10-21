import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import dynamic from 'next/dynamic'

import Cart from './Cart';

import styles from '../styles/component_styles/Cart.module.scss';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import Image from 'next/image';


import mainLogo from '../src/icons/MainLogo3.png';

//динамический роут нужен для отключения ssr, чтобы корзина отрисовывалась только на стороне клиента
//без него появляется ошибка гидратации
// const DynamicCart = dynamic(() => import('./Cart'), {
//     ssr: false,
// }) 

const Header = () => {
    const [showCart, toggleShowCart] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartAmount = useSelector((state) => state.cart.cartItems.length);

    const nodeRef = useRef(null);

    const cartOpen = () => {
        cartRef.classList.toggle('is_cart_open');
    }

    if (typeof window !== "undefined") {
        if (showCart === true) {
            window.document.body.style.overflow = 'hidden';
        } else {
            window.document.body.style.overflow = 'auto';
        }
    }

    return (
        <div className='header'>
            <div className='container'>
                <div className='header_inner'>
                    <Link className='header_logo-link' href='/'>
                        <Image src={mainLogo} width={90} height={90}/>
                    </Link>

                    <Navbar />

                    {/* <input className='header_search-inp' placeholder='Поиск...' /> */}

                    <button className='header_cart-btn' onClick={() => toggleShowCart(true)}>
                        <div className='header_cart-btn-count'>{cartAmount}</div>
                    </button>

                    <CSSTransition
                        in={showCart}
                        timeout={500}
                        classNames='cart'
                        unmountOnExit
                        nodeRef={nodeRef}
                    >
                        <div ref={nodeRef} className="cart__wrapper">
                            <Cart toggleShowCart={toggleShowCart} showCart={showCart} />
                        </div>

                    </CSSTransition>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;