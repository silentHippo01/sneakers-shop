import Link from 'next/link';
// import style from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className="menu">
            <ul className='menu__list'>
                <li>
                    <div className='menu__list-item'>
                        <Link className='menu__list-link' href={'/shoes/'}>ОБУВЬ</Link>
                    </div>
                </li>
                <li>
                    <div className='menu__list-item'>
                        <Link className='menu__list-link' href={'/clothes/'}>ОДЕЖДА</Link>
                    </div>
                </li>
                <li>
                    <div className='menu__list-item'>
                        <Link className='menu__list-link' href={'/accessories/'}>АКСЕССУАРЫ</Link>
                    </div>
                </li>
                <li>
                    <div className='menu__list-item'>
                        <Link className='menu__list-link' href={'/shipping/'}>ДОСТАВКА</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;