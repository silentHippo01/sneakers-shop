import React from 'react';
import styles from '../styles/Product_page.module.scss';

const Sizes = ({ size }) => {
    return (
        <div className={styles.product__sizes_item}>
            {/* <p className={styles.product__sizes_item_text}>
                { size }
            </p> */}
            { size }
        </div>
    );
};

export default Sizes;