import React from "react";

const StockProperty = ({max, min, avg}) => {
  return (
    <React.Fragment>
      <div>Maximum : {max}</div>
      <div>Minimum : {min}</div>
      <div>Average : {avg}</div>
    </React.Fragment>
  );
};

export default StockProperty;
