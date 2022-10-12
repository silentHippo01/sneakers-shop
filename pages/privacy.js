import { client } from "../lib/client";
import { PortableText } from '@portabletext/react';

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

const privacy = ({ text }) => {
    console.log(text[0]);
    return (
        <div>
            <div className="container">
                <PortableText value={text[0].content} />
            </div>
        </div>
    );
};

export default privacy;