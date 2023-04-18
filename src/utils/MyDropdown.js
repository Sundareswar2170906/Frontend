import React from "react";

import { Dropdown } from "react-bootstrap";

const MyDropdown = ({title, list, getStockList}) => {

  return (
    <React.Fragment>
      <Dropdown>
        <Dropdown.Toggle variant="primary" style={{background: "none", color: "black"}} id="dropdown-basic">
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {list.map(company=>{
            return(
              <Dropdown.Item onClick={()=>getStockList(company.code)} key={company.id}>{company.name}</Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

export default MyDropdown;
