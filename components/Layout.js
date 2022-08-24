import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='main'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;