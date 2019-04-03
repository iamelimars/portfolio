import React from 'react';
import Nav from '../navbar';
import Footer from '../footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = (props) => (
    <div>
        <Nav />
        {props.children}
        <Footer />
    </div>
)

export default Layout