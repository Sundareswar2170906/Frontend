import React from "react";

import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={Styles.footer}>
        <div>
          <div>Register</div>
          <div>Add Company Details</div>
          <div>Add Stock Price</div>
          <div>Update Company Details</div>
        </div>
        <div>
          <div>Delete Company</div>
          <div>Delete Stock Price</div>
          <div>Request for Admin</div>
          <div>Admin Panel</div>
        </div>
        <div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Meet the Founders</div>
          <div>Visit Us</div>
        </div>
      </div>
      <div style={{color:"white", padding:"5px", fontSize:"10px"}}>copyright (c) 2023 mystock.com</div>
    </React.Fragment>
  );
};

export default Footer;
