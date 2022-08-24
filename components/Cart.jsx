import { useSelector } from 'react-redux';
import styles from '../styles/Cart.module.scss';
import CartItem from './CartItem';

const Cart = ({ toggleShowCart }) => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems);
    
    return (
        <div className={styles.cart}>
           <div className={styles.cart__wrapper}>
                <div className={styles.cart__header}>
                    <button 
                        className={styles.cart__close_btn}
                        onClick={() => toggleShowCart(false)}
                        >
                            Продолжить покупки
                    </button>

                    <h2 className={styles.cart__title}>
                        Ваша корзина
                    </h2>
                </div>

                <div className={styles.cart__content}>
                    {
                        cartItems && cartItems.map((item, id) => (
                            <CartItem key={id} product={item}/>
                        ))
                    }
                </div>
           </div>
        </div>
    );
};

export default Cart;