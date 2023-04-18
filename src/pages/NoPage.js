import React, { Component } from 'react';
import NoPageComponent from '../components/NoPageComponent/NoPageComponent';
import Menu from '../components/Menu/Menu';

const NoPage = () => {
    return ( 
        <React.Fragment>
            <Menu/>
            <NoPageComponent/>
        </React.Fragment>
     );
}
 
export default NoPage;