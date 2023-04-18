import React from "react";

import { Table } from "react-bootstrap";


const MyTable = (props) => {
  return (
    <React.Fragment>
      <Table striped bordered hover style={{background:"white", border: "solid 1px lightgray", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}}>
        <thead>
          <tr>
            {props.headers.map((prop, index) => {
              return <th key={index}>{prop}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.details.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.price}</td>
                <td>{stock.date}</td>
                <td>{stock.time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default MyTable;
