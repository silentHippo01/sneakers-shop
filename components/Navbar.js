import Link from 'next/link';
import React from 'react';
// import style from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className="menu">
            <ul className='menu__list'>
                <li>
                    <div className='menu__list-item'>
                        <Link className='menu__list-link' href={'/catalog/'}>обувь</Link>
                    </div>
                </li>
                <li>
                    <div className='menu__list-item'>
                        <a className='menu__list-link' href="#">бренды</a>
                    </div>
                </li>
                <li>
                    <div className='menu__list-item'>
                        <a className='menu__list-link' href="#">аксессуары</a>
                    </div>
                </li>
                <li>
                    <div className='menu__list-item'>
                        <a className='menu__list-link' href="#">доставка</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;