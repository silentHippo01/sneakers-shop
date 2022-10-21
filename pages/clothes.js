import React, {useState} from 'react';
import { client } from '../lib/client';
import styles from '../styles/page_style/Shoes.module.scss';
import Product from '../components/Product';

export const getServerSideProps = async () => {
    const clothesQuery = '*[_type == "clothes"]';

    const clothesArr = await client.fetch(clothesQuery);

    if(!clothesArr){
        return(
            console.log('ничего')
        )
    }
    return {
        props: {
            clothesArr
        }
    }
}

const Catalog = ({ clothesArr }) => {
    const [filter, setFiltered] = useState('all');

    const filters = (arr, filter) => {
        if(filter === 'all'){
            return arr;
        } else {
            return arr.filter(elem => elem.typeOfProduct === filter);
        }
    }

    const filtered = filters(clothesArr, filter);

    // функция filters нужна, тк реализовать тоже самое с методом filter не получиться. 
    // Схема ломается, когда нужно вывести все товары без фильтра
    // const filteredShoes = shoesArr.filter(elem => elem.brand === filter);

    return (
        <div className={styles.shoes}>
            <div className='container'>
                <div className={styles.shoes__inner}>
                    <h1 className={styles.shoes__title}>Одежда</h1>

                    {/* <div className={styles.shoes__filter}>
                        <button className={styles.shoes__filter_brand} value="all" onClick={(e)=>setFiltered(e.target.value)}>Все</button>
                        <button className={styles.shoes__filter_brand} value="hoodie" onClick={(e)=>setFiltered(e.target.value)}>Худи</button>
                        <button className={styles.shoes__filter_brand} value="T-shirt" onClick={(e)=>setFiltered(e.target.value)}>Футболки</button>
                        <button className={styles.shoes__filter_brand} value="jeans" onClick={(e)=>setFiltered(e.target.value)}>Джинсы</button>
                    </div> */}
                    <div className={styles.shoes__wrapper}>
                        {
                            filtered?.map((elem, index) => (
                                <Product product={elem} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;