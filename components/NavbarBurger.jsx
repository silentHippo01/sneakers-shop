import styles from "../styles/component_styles/NavbarBurger.module.scss"
import Link from "next/link";

const NavbarBurger = ({ close }) => {
    return (
        <div className={styles.navbarBurger}>
            <div className={styles.navbarBurger__closeBtn} onClick={() => close(false)}>
                
            </div>
            <div className={styles.navbarBurger__inner}>
            <ul className={styles.navbarBurger__list}>
                <li>
                    <div className={styles.navbarBurger__list_item} onClick={() => close(false)}>
                        <Link className={styles.navbarBurger__list_link} href={'/shoes/'} >ОБУВЬ</Link>
                    </div>
                </li>
                <li>
                    <div className={styles.navbarBurger__list_item} onClick={() => close(false)}>
                        <Link className={styles.navbarBurger__list_link} href={'/clothes/'}>ОДЕЖДА</Link>
                    </div>
                </li>
                <li>
                    <div className={styles.navbarBurger__list_item} onClick={() => close(false)}>
                        <Link className={styles.navbarBurger__list_link} href={'/accessories/'}>АКСЕССУАРЫ</Link>
                    </div>
                </li>
                <li>
                    <div className={styles.navbarBurger__list_item}>
                        <Link className={styles.navbarBurger__list_link} href={'/shipping/'}>ДОСТАВКА</Link>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default NavbarBurger;