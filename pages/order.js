import { useEffect, useState } from "react";

import styles from '../styles/page_style/Order.module.scss';
import { urlFor } from '../lib/client';

import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormItem from "../components/FormItem";


// const schema = yup.object().shape({
//     fullName: yup
//         .string()
//         .matches(/^([^0-9]*)$/, "ФИО не может содержать цифры")
//         .required("Обязательное поле"),
//     email: yup
//         .string()
//         .email("Введите корректный адрес эл. почты")
//         .required("Обязательное поле"),
// })

const schema = yup.object().shape({
    fullName: yup.string().matches(/^([^0-9]*)$/, "ФИО не может содержать цифры").required("Обязательное поле"),
    email: yup.string().email().required(),
    phone: yup.string().matches(/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/, "Некоректный номер телефона").required("Обязательное поле"),
    country: yup.string().matches(/^([^0-9]*)$/, "Некоректное название страны").required("Обязательное поле"),
    city: yup.string().matches(/^([^0-9]*)$/, "Некоректное название города").required("Обязательное поле"),
    address: yup.string().matches(/^([^0-9]*)$/, "Некоректный адрес").required("Обязательное поле"),
    zipcode: yup.string().matches(/^\d{6}$/, "Некоректное почтовый индекс").required("Обязательное поле"),
    notes: yup.string(),
});


const order = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };

    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div className={styles.order}>
            <div className='container'>
                <div className={styles.order__inner}>
                    <h1>Оформление заказа</h1>
                    <div className={styles.order__content}>
                        <div className={styles.order__details}>
                            <h3 className={styles.order__details_title}>Введите данные для доставки</h3>

                            <form className={styles.order__details_form} onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>ФИО</p>
                                    <input
                                        className={styles.order__details_form_item_input}
                                        {...register("fullName")}
                                        type="text"
                                        required
                                    />
                                </div>

                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>Эл. почта</p>
                                    <input 
                                        className={styles.order__details_form_item_input}
                                        {...register("email")}
                                        type="email"
                                        required
                                    />
                                    <p>{errors.email?.message}</p>
                                </div>

                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>Телефон</p>
                                    <input 
                                        className={styles.order__details_form_item_input}
                                        {...register("phone")}
                                        type="text"
                                        required
                                    />
                                    <p>{errors.phone?.message}</p>
                                </div>

                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>Страна</p>
                                    <input 
                                        className={styles.order__details_form_item_input}
                                        {...register("country")}
                                        type="text"
                                        required
                                    />
                                    <p>{errors.country?.message}</p>
                                </div>
                                

                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>Город</p>
                                    <input 
                                        className={styles.order__details_form_item_input}
                                        {...register("city")}
                                        type="text"
                                        required
                                    />
                                    <p>{errors.city?.message}</p>
                                </div>

                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>Адрес</p>
                                    <input 
                                        className={styles.order__details_form_item_input}
                                        {...register("address")}
                                        type="text"
                                        required
                                    />
                                    <p>{errors.address?.message}</p>
                                </div>

                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>Почтовый индекс</p>
                                    <input 
                                        className={styles.order__details_form_item_input}
                                        {...register("zipcode")}
                                        type="text"
                                        required
                                    />
                                    <p>{errors.zipcode?.message}</p>
                                </div>

                                <div className={styles.order__details_form_item}>
                                    <p className={styles.order__details_form_item_title}>Примечание</p>
                                    <input 
                                        className={styles.order__details_form_item_input}
                                        {...register("notes")}
                                        type="text"
                                    />
                                    <p>{errors.email?.message}</p>
                                </div>

                                <button className={styles.order__details_form_btn} type="submit">Далее</button>
                            </form>

                        </div>
                        <div className={styles.order__products}>
                            <h3>Ваш заказ</h3>
                            <div className={styles.order__products_content}>
                                {
                                    cartItems?.map((item) => (
                                        <div className={styles.order__products_content_item} key={item._id}>
                                            <img className={styles.order__products_content_item_img} src={urlFor(item.image[0])} />
                                            <div className={styles.order__products_content_item_details}>
                                                <h4>{item.name}</h4>
                                                <p>Размер: {item.chooseSize}</p>
                                                <p>Кол-во:{item.qty}</p>
                                                <p>Цена:{item.price}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default order;