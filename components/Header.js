import React, { useState } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

import Cart from './Cart';

const Header = () => {
    const [showCart, toggleShowCart] = useState(false)

    return (
        <div className='header'>
            <div className='container'>
                <div className='header_inner'>
                    <Link className='header_logo-link' href='/'>
                        SNEAKERS
                    </Link>

                    <Navbar />

                    {/* <div className='header_search'>
                        <input className='header_search-inp' placeholder='Поиск...' />
                    </div> */}
                    <input className='header_search-inp' placeholder='Поиск...' />

                   <button className='header_cart-btn' onClick={() => toggleShowCart(!showCart)}></button>

                   {
                    showCart && <Cart toggleShowCart={toggleShowCart}/>
                   }
                </div>
            </div>
        </div>
    );
};

export default Header;