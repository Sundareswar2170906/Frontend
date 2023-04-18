import React, { Component } from 'react';
import Styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( <div className={Styles.MenuHeader}>
        <div className={Styles.Menu}><Link to="/home"> Home</Link></div>
        <div className={Styles.Menu}><Link to="/stock-details"> Stock Details</Link></div>
        <div className={Styles.Menu}><Link to="/add"> Add Company</Link></div>
        <div className={Styles.Menu}><Link to="/about-us"> About Us</Link></div>
        <div className={Styles.Menu}><Link to="/contact-us"> Contact Us</Link></div>
    </div> );
}
 
export default Menu;