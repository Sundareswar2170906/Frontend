import React, { Component } from 'react';
import Addcomponent from '../components/AddComponent/AddComponent';
import Menu from '../components/Menu/Menu';

const AddPage = () => {
    return ( 
        <React.Fragment>
            <Menu />
            <Addcomponent />
        </React.Fragment>
     );
}
 
export default AddPage;