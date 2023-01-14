import styles from '../styles/faq.module.scss';
import { client } from '../lib/client';
import { PortableText } from '@portabletext/react';
import shipping from './shipping';

export const getServerSideProps = async () => {
    const faqQuery = '*[_type == "FAQ"]';
    const faqArr = await client.fetch(faqQuery);


    if (!faqArr) {
        return (
            console.log('Статьи о доставки не пришли с сервера')
        )
    }

    return {
        props: {
            faqArr
        }
    }
}

const components = {
    block: {
        h3: ({ children }) => <h1 className={styles.faq__content_title}>{children}</h1>,
    }
}
 
const faq = ({ faqArr }) => {
    console.log(faqArr);
    return (
        <div className={styles.faq}>
            <div className='container'>
                <h1 className='titleH1'>Вопрос-ответ</h1>
                <div className={styles.faq__inner}>
                    <div className={styles.faq__content}>
                        <div className={styles.faq__content_item}>
                            <PortableText value={faqArr[0].content} components={components}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default faq;