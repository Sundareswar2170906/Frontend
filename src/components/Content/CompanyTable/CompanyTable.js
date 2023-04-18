import React, { useEffect, useState } from 'react';

import MyTable from '../../../utils/MyTable';

const CompanyTable = (props) => {

    const [show, setShow] = useState(false);
    useEffect(()=>{
        if (props.details.length!==0){
            setShow(true)
        }
    },[props.details])

    return ( 
        <React.Fragment>
            {show && <MyTable headers={["Price", "Date", "Time"]} details={props.details}/>}
        </React.Fragment>
     );
}
 
export default CompanyTable;