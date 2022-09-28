const clearSession = ()=> {
    sessionStorage.clear();
}

const setSession = (key:string, data:any) => {
    sessionStorage.setItem(key,data);
}

const getSession = (key:string) => {
    console.log("--" + key);
    return sessionStorage.getItem(key);
}

const removeSession = (key:string) => {
    sessionStorage.removeItem(key);
}

const getAccessToken = () => {
    const obj = JSON.parse(getSession("auth")+"");
    return obj.token;
}

export {clearSession,setSession,removeSession,getSession,getAccessToken};