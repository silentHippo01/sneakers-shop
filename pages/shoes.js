import React, {useState} from 'react';
import { client } from '../lib/client';
import styles from '../styles/page_style/Shoes.module.scss';
import Product from '../components/Product';

import { paginate } from '../utils/paginate';
import Pagination from '../components/Pagination';

export const getServerSideProps = async () => {
    const shoesQuery = '*[_type == "shoes"]';

    const shoesArr = await client.fetch(shoesQuery);

    if(!shoesArr && !shoes){
        return(
            console.log('ничего')
        )
    }
    return {
        props: {
            shoesArr
        }
    }
}

const Catalog = ({ shoesArr }) => {
    const [filter, setFiltered] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const paginatePost = paginate(shoesArr, currentPage, pageSize);

    const filters = (arr, filter) => {
        if(filter === 'all'){
            return arr;
        } else {
            return arr.filter(elem => elem.brand === filter);
        }
    }

    const filteredShoes = filters(shoesArr, filter);

    // функция filters нужна, тк реализовать тоже самое с методом filter не получиться. 
    // Схема ломается, когда нужно вывести все товары без фильтра
    // const filteredShoes = shoesArr.filter(elem => elem.brand === filter);

    return (
        <div className={styles.shoes}>
            <div className='container'>
                <div className={styles.shoes__inner}>
                    <h1 className={styles.shoes__title}>Кроссовки</h1>

                    {/* <div className={styles.shoes__filter}>
                        <button className={styles.shoes__filter_brand} value="all" onClick={(e)=>setFiltered(e.target.value)}>Все</button>
                        <button className={styles.shoes__filter_brand} value="Nike" onClick={(e)=>setFiltered(e.target.value)}>Nike</button>
                        <button className={styles.shoes__filter_brand} value="Adidas" onClick={(e)=>setFiltered(e.target.value)}>Adidas</button>
                        <button className={styles.shoes__filter_brand} value="Vans" onClick={(e)=>setFiltered(e.target.value)}>Vans</button>
                        <button className={styles.shoes__filter_brand} value="Puma" onClick={(e)=>setFiltered(e.target.value)}>Puma</button>
                        <button className={styles.shoes__filter_brand} value="Reebok" onClick={(e)=>setFiltered(e.target.value)}>Reebok</button>
                    </div> */}
                    <div className={styles.shoes__wrapper}>
                        {
                            paginatePost?.map((elem, index) => (
                                <Product product={elem} key={index}/>
                            ))
                        }
                    </div>

                    <Pagination 
                        items={shoesArr.length}
                        pageSize={pageSize}
                        currentPage={currentPage}   
                        onPageChange={handlePageChange} 
                    />
                </div>


            </div>
        </div>
    );
};

export default Catalog;