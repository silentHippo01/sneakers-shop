import React from 'react';
import Header from './Header';
import Footer from './Footer';

import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('./Header'), {
    ssr: false,
}) 

const Layout = ({ children }) => {
    return (
        <div className='wrapper'>
            <DynamicHeader />
            <div className='main'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;