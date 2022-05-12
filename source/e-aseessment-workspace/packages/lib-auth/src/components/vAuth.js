import axios from 'axios';
import config from '../config';

const vDoAuth = (auth)=> {    
    console.log("****");
    const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };

    const user = {
        "username" : auth.email,
        "password" : auth.password
    };

       
    return await axios.post(config.url + config.auth, user,{ headers });

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