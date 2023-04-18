import React, { Component } from 'react';
import Styles from './HomePageComponent.module.css';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import stock from './../../stockss.jpg';

const HomePageComponent = () => {
    return ( 
        <div className={Styles.Home}>
            <Menu />
            <div className={Styles.Content}>
                <div>
                    <img src={stock} className={Styles.StockImg}/>
                </div>
                <div className={Styles.Data}>
                    Welcome to Daily Stock Portal. <br />
                    Here we give you updated values of all the stocks <br />
                    from companies registered in NSE and BSE.<br />
                    Check the latest stock details:<br />
                    <Link to="/stock-details"> Stock Details</Link>
                </div>
            </div>
        </div>
     );
}
 
export default HomePageComponent;