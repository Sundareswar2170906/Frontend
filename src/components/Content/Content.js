import React, { useEffect, useState } from "react";

import CompanyList from "./CompanyList/CompanyList";
import CompanySearch from "./CompanySearch/CompanySearch";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

import Styles from "./Content.module.css";
import CompanyTable from "./CompanyTable/CompanyTable";
import DatePicker from 'react-date-picker';
import getList from '../../services/StockService';
import StockProperty from "./StockProperty/StockProperty";


const Content = () => {

  
  const [details, setDetails]= useState({});

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [companyCode, setCompanyCode] = useState(1);


  useEffect(()=>{
    getCompanyStockInfo()

  },[startDate, endDate, companyCode])

  async function getCompanyStockInfo(){
    getList(companyCode, startDate, endDate).then(res=>{
      setDetails(res)
    })
  }

  const startDateHandler = (e) =>{
    setStartDate(e)
    getCompanyStockInfo()
  }

  const endDateHandler = (e) =>{
    setEndDate(e)
    getCompanyStockInfo()
  }

  const companyCodeHandler = (code) =>{
    setCompanyCode(code)
    getCompanyStockInfo()
  }


  return (
    <React.Fragment>
      <div className={Styles.content} data-testid="content">
        <div className={Styles.contentLayout}>
          <div>
            <CompanyList getStockList={companyCodeHandler}/>
          </div>
          <div>
            <CompanySearch getDetails={companyCodeHandler} />
          </div>
          <div>
          <DatePicker onChange={startDateHandler} value={startDate} dateFormat='yyyy-MM-dd' placeholder='Enter start date'/>
          <DatePicker onChange={endDateHandler} value={endDate} dateFormat='yyyy-MM-dd' placeholder='Enter end date'/>
        </div>
        </div>
        <div className={Styles.Details}>
          {details.company && <CompanyDetails code={details.company.code} name={details.company.name} max={details.max} min={details.min} avg={details.avg}/>}
          {details.company && <CompanyTable details={details.stock} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
