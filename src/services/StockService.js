import axios from "axios";

let proxyUrl = "http://localhost:8081";

// let compUrl = "http://companysixalb-1313204015.ap-south-1.elb.amazonaws.com";
// let stockUrl = "http://newstock-alb-330497202.ap-south-1.elb.amazonaws.com";
let compUrl = "http://localhost:8081";
let stockUrl = "http://localhost:8082";

async function companyDataFunc(code){
    let d = axios.get(`${compUrl}/api/v1.0/market/company/info/${code}`).then((res) => {
        return res.data;
      });
    return d
}

async function stockDataFunc(url){
    let d = axios.get(url).then((res) => {
        return res.data;
      });
    return d
}

async function getList(code, start, end) {
    let newStart = new Date(start) 
    let month
    month = newStart.getMonth() + 1
    let formattedStart = newStart.getFullYear() + "-" + month + "-" +newStart.getDate()

    let newEnd = new Date(end) 
    month = newEnd.getMonth() + 1

    let formattedEnd = newEnd.getFullYear() + "-" + month + "-" +newEnd.getDate()

    let companyData = await companyDataFunc(code)
    let stockData 


  if ((start !== null) & (end !== null)) {
    let url = `${stockUrl}/api/v/1.0/market/stock/get/${code}/${formattedStart}/${formattedEnd}`
    
    stockData = await stockDataFunc(url)
  }

  if ((start !== null) & (end == null)) {
    let url = `${stockUrl}/api/v/1.0/market/stock/get/${code}/${formattedStart}`
    
    stockData = await stockDataFunc(url)  }

  if ((start == null) & (end !== null)) {
    let url = `${stockUrl}/api/v/1.0/market/stock/get/${code}//${formattedEnd}`
    
    stockData = await stockDataFunc(url)  }

  if ((start == null) & (end == null)) {
    let url = `${stockUrl}/api/v/1.0/market/stock/get/${code}`
    
    stockData = await stockDataFunc(url)
}

  let stocklist = new Array()
    let avg = 0.0
    let min = 0.0
    let max = 0.0
    let flag = 0
    let dateNew
    let mon
    let finalDate
    let finalTime
  for (let i=0; i<stockData.length; i++){
    flag++;
    dateNew = new Date(stockData[i].date)
    mon = dateNew.getMonth()+1
    finalDate = (dateNew.getDate()+"/"+mon+"/"+dateNew.getFullYear())
    finalTime = (dateNew.getHours()+":"+dateNew.getMinutes()+":"+dateNew.getSeconds())

    let a = {
        code : stockData[i].code,
        price : stockData[i].price,
        date: finalDate,
        time: finalTime
    }
    if(flag==1){
        avg = stockData[i].price;
        min = stockData[i].price;
        max = stockData[i].price;
    }
    else{
    avg = (avg + stockData[i].price)/(i+1)
    min = stockData[i].price<min?stockData[i].price:min
    max = stockData[i].price>max?stockData[i].price:max
    }
    stocklist.push(a)
  }

  let result = {
    company:{
        code: companyData.code,
        name: companyData.name
    },
    stock: stocklist,
    min,
    max,
    avg: avg
  }
  return result
}



export async function getAllStock() {
  return await axios.get(`${stockUrl}/api/v1.0/market/stock/latest/price`);
}

export async function getCompanyList() {
  return await axios.get(`${compUrl}/api/v1.0/market/company/getall`);
}

export default getList;
