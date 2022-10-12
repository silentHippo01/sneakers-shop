import React from 'react';
import Product from '../components/Product';
import { client } from '../lib/client';
import  styles  from '../styles/page_style/Accessories.module.scss';

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
    console.log(accessories);
    return (
        <div className={styles.accessories}>
            <div className='container'>
                <div className={styles.accessories__inner}>
                    <h2 className={styles.accessories__title}>Аксессуары</h2>

                    <div className={styles.accessories__products}>
                        {
                            accessories?.map((elem) => (
                                <Product product={elem} key={elem._id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default accessories;