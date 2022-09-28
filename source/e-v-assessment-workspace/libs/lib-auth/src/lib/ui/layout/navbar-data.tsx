const menu_data:any = {
    cec : [
        {"id":1,"name":"Add CEC Data","loc":"/addcec"},
        {"id":2,"name":"Search CEC Data","loc":"/searchcec"},
        {"id":3,"name":"Upload CEC Data","loc":"/updatecec"}
    ],
    t4 : [
        {"id":1,"name":"T4 Upload","loc":"/uploadt4"},
        {"id":2,"name":"T4 Register","loc":"/registert4"},
    ]
}

const fetch = (key:string):any => {
    return menu_data[key];
}

export default fetch;