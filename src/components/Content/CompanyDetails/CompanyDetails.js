import React from "react";

import Styles from '../CompanyDetails/CompanyDetails.module.css';

const CompanyDetails = (props) => {
  return (
    <React.Fragment>
      <div className={Styles.details}>
        <div>
          <h5>Company Code</h5> : {props.code}{" "}
        </div>
        <div>
          <h5>Company Name</h5> : {props.name}{" "}
        </div>
        <div>
          <h5>Maximum</h5> : {props.max}{" "}
        </div>
        <div>
          <h5>Minimum</h5> : {props.min}{" "}
        </div>
        <div>
          <h5>Average</h5> : {props.avg}{" "}
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default CompanyDetails;
