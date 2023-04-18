import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import Styles from '../CompanySearch/CompanySearch.module.css';

const CompanySearch = (props) => {

    const [search, setSearch] = useState(0);

    const changeHandler = (e) =>{
        setSearch(e.target.value)
    }

    return ( 
        <React.Fragment>
                <input className={Styles.search} style={{border:"solid 1px black"}} onChange={changeHandler}/>
                <Button style={{background: "darkblue", color: "white", border:"solid 5px white", fontSize: "14"}} onClick={()=>{props.getDetails(search)}}>Search Company by Code</Button>
        </React.Fragment>
     );
}
 
export default CompanySearch;