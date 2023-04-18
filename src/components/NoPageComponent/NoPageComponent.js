import React, { Component } from 'react';
import Styles from './NoPageComponent.module.css';
import { Link } from 'react-router-dom';

const NoPageComponent = () => {
    return ( 
        <React.Fragment>
            <div className={Styles.Component}>
                <div>
                    THIS PAGE DOES NOT EXIST.
                </div>
                <div>
                    Please return to the
                </div>
                <div>
                    <Link to="/"> Home Page</Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default NoPageComponent;