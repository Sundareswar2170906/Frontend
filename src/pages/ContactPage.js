import React, { Component } from "react";
import Menu from "../components/Menu/Menu";
import Styles from "./Pages.module.css";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Menu />
      <div className={Styles.Contact}>
        <div>Contact Us:</div>
        <div>email: sundareswar2170906@gmail.com</div>
        <div>Phone: +91 9876543210</div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
