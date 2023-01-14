import { client } from "../lib/client";
import { PortableText } from '@portabletext/react';
import styles from '../styles/page_style/Privacy.module.scss';

export const getServerSideProps = async () => {
    const query = '*[_type == "Privacy"]';
    const text = await client.fetch(query);

    if(!text){
        return (
            console.log('Политика конфиденциальности не пришла с сервера')
        )
    }
    
    return {
        props: {
            text
        }
    }
}

const components = {
    block: {
        h3: ({ children }) => <h3 className={styles.titleH3}> {children} </h3>,
        p:  ({ children }) => <p className={styles.text}>{children}</p>
    }
}

const privacy = ({ text }) => {
    return (
        <div>
            <div className="container">
                <PortableText value={text[0].content} components={components} />
            </div>
        </div>
    );
};

export default privacy;