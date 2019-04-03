import React from 'react';
import { Link } from 'react-router-dom';

import email from '../../../assets/images/004-close-envelope40.svg';
import github from '../../../assets/images/github.svg';
import linkedin from '../../../assets/images/linkedin.svg';
import instagram from '../../../assets/images/instagram.svg';


const footer = () => (
    <div style={styles.container}>
        <div style={styles.social}>
            <a style={styles.socialLink} href="https://www.instagram.com/iamelimarss/">
                <img width="20px" src={instagram} alt="" />
            </a>
            <a style={styles.socialLink} href="https://www.linkedin.com/in/elisha-marshall-iii-5446a4131/">
                <img width="20px" src={linkedin} alt="" />
            </a>
            <a style={styles.socialLink} href="https://github.com/iamelimars/">
                <img width="20px" src={github} alt="" />
            </a>
            <a style={styles.socialLink} href="mailto:elishajmarshall@gmail.com">
                <img width="25px" src={email} alt="" />
            </a>
        </div>
        <div style={styles.nav}>
            <Link style={styles.navItem} to="/" >
                Home
            </Link>
            <Link style={styles.navItem} to="/about">
                About
            </Link>
            <Link style={styles.navItem} to="/works">
                Works
            </Link>
            <Link style={styles.navItem} to="/blog">
                Tutorials
            </Link>
            <Link style={styles.navItem} to="/contact">
                Contact
            </Link>
        </div>
        <div style={styles.rights}><p>Made with ❤️ by <a target="_blank" href="https://github.com/iamelimars">Me</a></p></div>


    </div>
)

export default footer

const styles = {
    container: {
        padding: '40px 10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: '0',
        right: '0',
        left: '0'
    },
    social: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    socialLink: {
        margin: '0 10px',
        
    },
    nav: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    navItem: {
        padding: '15px',
        textDecoration: 'none',
        fontSize: '0.8rem',
        color: '#272E3F',
        transform: 'translateY(0px)'
    },
    rights: {
        fontSize: '0.6rem',
        paddingTop: '7px'
    }
}