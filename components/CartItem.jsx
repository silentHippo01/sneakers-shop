
import { urlFor } from '../lib/client';
// import styles from '../styles/Cart.module.scss';
import styles from '../styles/component_styles/Cart.module.scss';



import { useDispatch } from 'react-redux';
import { removeItem } from '../store/reducers/cartSlice';

import { useState } from 'react';

import { incQuantity, decQuantity } from '../store/reducers/cartSlice';


const CartItem = ({product, id}) => {
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        dispatch(removeItem(id));
    }
    const {image, name, price, chooseSize, qty, typeOfProduct} = product;

    const [quantityItem, setQuantity] = useState(1);

    const chooseQuantity = (qty) =>{
        if(qty < 1){
            return;
        } else{
            setQuantity(qty);
        }
    }


    return (
        <div className={styles.cartItem} onClick={(e) => e.stopPropagation()}>
            <span className={styles.cartItem__deleteBtn} onClick={() => clickHandler()}></span>
            <img className={styles.cartItem__img} src={urlFor(image[0])}/>
            <div className={styles.cartItem__info}>
                <h3>{name}</h3>
                <span>
                    <p>Количество: </p>
                    <div>
                        <button onClick={() => dispatch(decQuantity(id))}>--</button>
                        {qty}
                        <button onClick={() => dispatch(incQuantity(id))}>+</button>
                    </div>
                </span>
                
                {typeOfProduct !== 'accessories' ? <p className={styles.cartItem__size}>Размер: {chooseSize}</p> : ''}
                
                <p className={styles.cartItem__price}>Цена: {price} RUB</p>
            </div>
        </div>
    );
};

export default CartItem;