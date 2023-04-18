import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import elon from './../elon.jpg';
import Styles from './Pages.module.css';
import about from '../about.jpg';

const AboutPage = () => {
    return ( <div>
        <Menu />
        <div className={Styles.About}>
            <div>
                <img src={about} className={Styles.AboutImg}/>
            </div>
            <div>
                <div>
                    <img src={elon}  className={Styles.Elon}/>
                </div>
                <div>
                    <i>Elon Musk</i>
                </div>
                <div>
                    <b>CEO, Daily Stock Portal</b>
                </div>
                <div>
                    <i>
                    We try to help our users with the latest data from the market. <br />
                    Our aim is to make users get success in their trading by providing<br/>
                    this futuristic platform.
                    </i>
                </div>
            </div>
            <div>
                
            </div>


        </div>
    </div> );
}
 
export default AboutPage;