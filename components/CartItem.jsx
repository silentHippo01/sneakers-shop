
import { urlFor } from '../lib/client';
import styles from '../styles/Cart.module.scss';

const CartItem = (props) => {
    const {image, name, price} = props.product.product;

    // console.log('props',  props.product.product);
    // console.log(image);

    return (
        <div className={styles.cartItem}>
            <img className={styles.cartItem__img} src={urlFor(image[0])}/>
            <div className={styles.cartItem__info}>
                <h3>{name}</h3>
                <p>{price} RUB</p>
            </div>
        </div>
    );
};

export default CartItem;