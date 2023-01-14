import React, {useState} from 'react';
import { client } from '../lib/client';
import styles from '../styles/page_style/Shoes.module.scss';
import Product from '../components/Product';

import { paginate } from '../utils/paginate'; 
import Pagination from '../components/Pagination';

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
    console.log(filtered)

    // функция filters нужна, тк реализовать тоже самое с методом filter не получиться. 
    // Схема ломается, когда нужно вывести все товары без фильтра
    // const filteredShoes = shoesArr.filter(elem => elem.brand === filter);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const paginatePost = paginate(filtered, currentPage, pageSize);

    return (
        <div className={styles.shoes}>
            <div className='container'> 
                <div className={styles.shoes__inner}>
                    <h1 className='titleH1'>Одежда</h1>

                    <div className='filters'>
                        <button className='filters_item' value="all" onClick={(e)=>setFiltered(e.target.value)}>Все</button>
                        <button className='filters_item' value="T-shirt" onClick={(e)=>setFiltered(e.target.value)}>Футболки</button>
                        <button className='filters_item' value="Jacket" onClick={(e)=>setFiltered(e.target.value)}>Куртки</button>
                        <button className='filters_item' value="Hoodie" onClick={(e)=>setFiltered(e.target.value)}>Худи</button>
                    </div>
                    <div className="page__wrapper">
                             {
                                paginatePost?.map((elem, index) => (
                                    <Product product={elem} key={index}/>
                                ))
                             }
                    </div>

                    <Pagination 
                        items={filtered.length}
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