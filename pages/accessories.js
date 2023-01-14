import React, {useState} from 'react';
import Product from '../components/Product';
import { client } from '../lib/client';
import  styles  from '../styles/page_style/Accessories.module.scss';

import { paginate } from '../utils/paginate'; 
import Pagination from '../components/Pagination';

export const getServerSideProps = async () => {
    const accessoriesQuery = `*[_type == 'accessories']`;
    const accessories = await client.fetch(accessoriesQuery);

    return {
        props: {
            accessories: accessories
        }
    }
}

const accessories = ({ accessories }) => {

    
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    const paginatePost = paginate(accessories, currentPage, pageSize);
    console.log(accessories);
    return (
        <div className={styles.accessories}> 
            <div className='container'>
                <div className={styles.accessories__inner}>
                    <h2 className='titleH1'>Аксессуары</h2>

                    <div className="page__wrapper">
                        {
                            accessories?.map((elem) => (
                                <Product product={elem} key={elem._id}/>
                            ))
                        }
                    </div>

                    <Pagination 
                        items={accessories.length}
                        pageSize={pageSize}
                        currentPage={currentPage}   
                        onPageChange={handlePageChange} 
                    />
                </div>
            </div>
        </div>
    );
};

export default accessories;