import Link from 'next/link';
import Image from 'next/image';
import { ReactComponent as Logo } from './../src/icons/git.svg';

const Footer = () => {
    const linkStyle = {
        color: '#ffffff',
    }
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div className='footer__content'>
                        <div className='footer__menu'>
                            <ul className='footer__menu-list'>
                                <li className='footer__menu-item'>
                                    <Link href="/contacts">
                                        <a>контакты</a>
                                    </Link>
                                </li>
                                <li className='footer__menu-item'>
                                    <Link href="/faq">
                                        <a>
                                            вопрос-ответ
                                        </a>
                                    </Link>
                                </li>
                                <li className='footer__menu-item'>
                                    <Link href="/faq">
                                        <a>
                                            доставка
                                        </a>
                                    </Link>
                                </li>
                                <li className='footer__menu-item'>
                                    <Link href="/privacy">
                                        <a>
                                            Политика конфиденциальности
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__address'>
                            <div className='footer__address-title'>оффлайн магазины в москве</div>
                            <div className='footer__address-item'>ул. Ходынский бул. 4 (м. ЦСКА)</div>
                            <div className='footer__address-item'>Нижний Кисельный пер., 4 (м. Трубная)</div>
                            <div className='footer__address-item'>ул. Никольская, 10/2 с.2Б (м. Лубянка)</div>
                        </div>
                        <ul className='footer__socials'>
                            <li className='footer__socials-item'>
                                <a href="#"></a>
                            </li>
                            <li className='footer__socials-item'>
                                <a className='footer__socials-link footer__socials-git' href="#"><Image src='/../src/icons/git.svg' width={32} height={32} style={linkStyle}/></a>
                            </li>
                            <li className='footer__socials-item'>
                                <a className='footer__socials-link footer__socials-gmail' href="#">gmail</a>
                            </li>
                            <li className='footer__socials-item'>
                            </li>
                            <li className='footer__socials-item'>
                                <a className='footer__socials-link footer__socials-linkedin' href="#">linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <p className='footer__copyright'>
                        © 2022 Sneakers Shop, Inc. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

