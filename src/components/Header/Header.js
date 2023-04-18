import React from 'react';

import Styles from './Header.module.css'
import logo from '../../download.jpeg';
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
        <React.Fragment>
            {/* <img src={logo} alt="no image" className={Styles.ImagePos}/> */}
            <div className={Styles.header}>
                <div>Daily Stock Portal</div>
            </div>
        </React.Fragment>
     );
}
 
export default Header;