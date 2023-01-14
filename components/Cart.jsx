import { useSelector } from 'react-redux';
// import styles from '../styles/component_styles/Cart.module.scss';
import Link from 'next/link';

import CartItem from './CartItem';

const Cart = ({ toggleShowCart, showCart, ref }) => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return (
        <>
            <div className='cart'>
                <div className='cart__blackout' onClick={() => toggleShowCart(false)}></div>
                <div className='cart__inner'>
                    <button className='cart__btn' onClick={() => toggleShowCart(false)}>Продолжить покупки</button>
                    <h3 className='cart__title'>Мои покупки</h3>
                    <div className='cart__content'>
                        {
                            cartItems?.map((item, _id) => (
                                <CartItem product={item} key={_id} id={_id} />
                            ))
                        }
                        {/* <p className='cart__total'>Итого: {totalPrice} </p> */}
                        
                        {
                            cartItems.length > 0 ? 
                            <div className='cart__bottom'> 
                                <p className='cart__total'>Итого: {totalPrice} </p> 
                                <button className='cart__btn_buy'>  <Link href="/order">  Оформить заказ </Link></button> 
                            </div> 
                            : 
                            <p className='cart__isEmpty'>Корзина пуста</p>
                        }
                        
                        
                        
                           
                    </div>

                </div>

            </div>
        </>

    );
};

export default Cart;