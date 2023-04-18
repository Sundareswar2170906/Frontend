import axios from "axios";

let proxyurl = "http://localhost:8081/api/v1.0/market/company/register";

const addCompany = async ({name, ceo, code, valuation, website, exchange, authUser, authPass}) => {

let basic = btoa(authUser+":"+authPass)
  return await axios.post(
    `${proxyurl}`,
    {
      name,
      ceo,
      code,
      turnover: valuation,
      website,
      exchange
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${basic}` 
      },
    }
  );
};

export default addCompany;
