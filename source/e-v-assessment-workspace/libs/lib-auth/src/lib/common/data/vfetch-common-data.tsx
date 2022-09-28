import axios from "axios";
import config  from "../../config";
import CeCCategory from "../../model/CeCCategory";
import { getAccessToken, getSession } from "./vuser-session";

const fetchCeCCategory = async ()=>{
    //fetch()
    const url:string = config.url + "/api/common/ceccategories";
    const aToken = getAccessToken();
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':  'Bearer ' + aToken
      };

      //const cecs:CeCCategory[] = (await axios.get(url,{headers: headers})).data as CeCCategory[];
      //return cecs;
      return axios.get(url,{headers: headers});

      

    // axios.get(url,{
    //     headers: headers
    // }).then((response) => {
    //     console.log("#@#@#@#@#@#@#@#@");
    //     console.log(response.data);
    //   });

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Authorization': 'Bearer ' + aToken,
    //         'Content-Type': 'application/json'
    //       }
    // };
    
    // fetch(url,options).then(res =>{
    //     console.log("&&&&&&&&&");
    //     console.log(res);
    // })

    // axios({
  
    //     // Endpoint to send files
    //     url: url,
    //     method: "GET",
    //     headers: {
    
    //       // Add any auth token here
    //       'Accept': 'application/json',
    //       'Authorization': 'Bearer ' + aToken,
    //       'Content-Type': 'application/json'
    //     }
    //   }).then((res) => { 
    //         console.log("$%$%$%$%$%$%$%$%");
    //         console.log(res);
    //     }).catch((err) => {
    //         console.error(err);
    //      });
    

    
    //return "no data";
}

    // fetch(url, { 
    //     method: 'post', 
    //     headers: new Headers({
    //         'Authorization': 'Bearer ' + aToken, 
    //         'Content-Type': 'application/json'
    //     })
    // });
//}

export {fetchCeCCategory};


