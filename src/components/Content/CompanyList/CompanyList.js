import React, { useEffect, useState } from 'react';

import MyDropdown from '../../../utils/MyDropdown';

import { getCompanyList, getAllStock } from '../../../services/StockService';

const CompanyList = (props) => {

    const [companyList, setCompanyList]=useState();

    useEffect(()=>{

        getCompanyList()
        .then(response=>{setCompanyList(response.data)})
        .catch(error=>{throw new Error(error)})
    },[])

    useEffect(()=>{
        getAllStock().then(res=>{
            console.log(res.data)
        })
    },[])

    return ( 
        <React.Fragment>
            <div className='companyList' >
                {companyList && <MyDropdown title="Company List" list={companyList} getStockList={props.getStockList}/>}
            </div>
        </React.Fragment>
     );
}
 
export default CompanyList;