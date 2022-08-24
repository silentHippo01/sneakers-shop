import React from 'react';
import { client } from '../lib/client';

export const getServerSideProps = async () => {
    const productsQuery = '*[_type == "product"]';

    const products = await client.fetch(productsQuery);

    if(!products && !product){
        return(
            console.log('нихуя')
        )
    }
    return {
        props: {
            products
        }
    }
}

const Catalog = ({ products }) => {
    console.log(products);
    return (
        <div>
            catalog
        </div>
    );
};

export default Catalog;