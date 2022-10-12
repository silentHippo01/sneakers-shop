import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import { client } from '../lib/client';

export const getServerSideProps = async () => {
    const shippingQuery = '*[_type == "shippingPageContent"]';
    const shippingArticles = await client.fetch(shippingQuery);


    if (!shippingArticles) {
        return (
            console.log('Статьи о доставки не пришли с сервера')
        )
    }

    return {
        props: {
            shippingArticles
        }
    }
}

const components = {
    block: {
        h3: ({ children }) => <h1 className='title'>{children}</h1>,
    }
}

const shipping = ({ shippingArticles }) => {
    console.log(shippingArticles);

    const [activeArticle, setActiveArticle] = useState(2);

    return (
        <div className='shipping'>
            <div className='container'>
                <h1 className='shipping__title titleH1'>Оплата и доставка</h1>

                <div className='shipping__inner'>

                    <div className='shipping__articles'>
                        {
                            shippingArticles?.map((elem, i) => (
                                <div className={activeArticle === i ? 'shipping__article active' : 'shipping__article'} onClick={() => setActiveArticle(i)} key={i}>
                                    <PortableText value={shippingArticles[i].content} components={components} />
                                </div>
                            ))
                        }
                    </div>

                    <div className='shipping__aside'>
                        <a className='shipping__aside_tab' onClick={() => setActiveArticle(2)} href="#">Москва</a>
                        <a className='shipping__aside_tab' onClick={() => setActiveArticle(3)} href="#">Россия</a>
                        <a className='shipping__aside_tab' onClick={() => setActiveArticle(0)} href="#">За границу</a>
                        <a className='shipping__aside_tab' onClick={() => setActiveArticle(1)} href="#">Санк-Петербург</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default shipping;