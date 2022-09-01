import axios from 'axios';
import config from '../config';

const vDoAuth = (auth:any)=> {    
    console.log("****!*");
    const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar',
        "Content-Type" : "application/json"
    };

    const user = {
        "username" : auth.email,
        "password" : auth.password
    };

       
    //return axios.post(config.url + config.auth, user,{ headers });

    return axios.post(config.url + config.auth, user,{ headers });
    // axios.post(config.url + config.auth, 
    //                 user, 
    //                 { headers })
    //                .then(x=>{
    //                    console.log("=======================");
    //                    console.log(x);
    //                    sessionStorage.setItem("auth",JSON.stringify(x.data));
    //                });   
}

export default vDoAuth; 