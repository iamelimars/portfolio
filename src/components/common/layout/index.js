import React from 'react';
import Nav from '../navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)

export default Layout