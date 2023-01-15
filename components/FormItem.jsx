import React from 'react';
import { forwardRef } from 'react';
import styles from '../styles/page_style/Order.module.scss'

const FormItem = (props, ref) => {
    return (
        <div className={styles.order__details_form_item}>
            <p className={styles.order__details_form_item_title}>{props.title}</p>
            <input
                className={styles.order__details_form_item_input}
                {...props}
                inputRef={ref}
            />
        </div>
    );
};

export default FormItem;