import React, { useState, Component } from "react";
import Styles from './AddComponent.module.css';

import addCompany from "../../services/AddService";

const Addcomponent = () => {
  const [name, setName] = useState("");
  const [ceo, setCeo] = useState("");
  const [code, setCode] = useState("");
  const [valuation, setValuation] = useState("");
  const [exchange, setExchange] = useState("");
  const [website, setWebsite] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [authPass, setAuthPass] = useState("");

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  let clearForm = () =>{
    setName("")
    setCeo("")
    setCode("")
    setExchange("")
    setValuation("")
    setWebsite("")
    setAuthPass("")
    setAuthPass("")
  }

  const isError = () =>{
  clearForm()
  setFailure(false)
  }

  return (
    <React.Fragment>
        <div className={Styles.Comp}>Add Your Company</div>
        {success && <div className={Styles.Succeess}>Successfully Added your Company</div>}
        {failure && <div className={Styles.Failure}>Failed to Add your Company. Provide valid details</div>}
      <div className={Styles.Add}> 
        <form
          onSubmit={(e) => {
            setSuccess(false)
            setFailure(false)
            e.preventDefault();
            addCompany({
              name,
              ceo,
              code,
              valuation,
              exchange,
              website,
              authUser,
              authPass
            }).then(
              response=>{
                if(response.status===200){
                  clearForm()
                  setSuccess(true)
                }
                else{
                  clearForm()
                  setFailure(true)
                }
              }
            ).catch(
              isError()
            ).finally(
              isError()
            )
          }}
        >
          <div>
            <label>
              Enter company name:
              </label><br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div>
            <label>
              Enter CEO name:
              </label>
                <br />
              <input
                type="text"
                value={ceo}
                onChange={(e) => setCeo(e.target.value)}
              />
          </div>
          <div>
            <label>
              Enter your Registration Code:
              </label>
                <br />
              <input
                type="number"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
          </div>
          <div>
            <label>
              Enter your valuation:
              </label>
                <br />
              <input
                type="number"
                value={valuation}
                onChange={(e) => setValuation(e.target.value)}
              />
          </div>
          <div>
            <label>
              Enter your exchange:
              </label>
                <br />
              <input
                type="text"
                value={exchange}
                onChange={(e) => setExchange(e.target.value)}
              />
          </div>
          <div>
            <label>
              Enter your website name:
              </label>
                <br />
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
          </div>
          <div>
            <label>
              Enter Authentication Key:
              </label>
                <br />
              <input
                type="text"
                value={authUser}
                onChange={(e) => setAuthUser(e.target.value)}
              />
          </div>
          <div>
            <label>
              Enter Authentication Password:
              </label>
                <br />
              <input
                type="password"
                value={authPass}
                onChange={(e) => setAuthPass(e.target.value)}
              />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Addcomponent;
