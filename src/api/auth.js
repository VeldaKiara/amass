import axios from 'axios';

let baseUrl = "http://54.175.235.38"
// let baseUrl = "http://127.0.0.1:8000"


export const doLogin = (params,cb) =>{

    axios.post(`${baseUrl}/api/token/`, params)
    .then(res=>{
        cb({status:true, result:res.data})
    })
    .catch(err=>{
        cb({status:false, result:err})
    })

}
export const doSignup = (params,cb) =>{

    axios.post(`${baseUrl}/api/customuser/`, params)
    .then(res=>{
        cb({status:true, result:res.data})
    })
    .catch(err=>{
        cb({status:false, result:err})
    })

}

// token passing on header to store 
export const eventCreation = (token,params, callback)=>{

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.post(`${baseUrl}/api/events/`, params,config)
    .then(result=>{
        callback({status:'success', result:result.data})
    })
    .catch(errors =>{
        callback({status:'fail', errors:errors})
    })

}
export const eventList = (callback) =>{
    axios.get(`${baseUrl}/api/events/`)
    .then(resp=>{
        callback({status:'success', result:resp.data })
        
    })
    .catch(erroneous=>{
        callback({status:'failed', result:erroneous})
    })
}
export const rsvpApi = (token, param,callb) =>{
    const con = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(`${baseUrl}/api/tinypesa/start/`, {...param,ticket_number:param.number}, con)
    .then(resss=>{
        callb({status:'success', result:resss.data})
    })
    .catch(er=>{
        callb({status:'failed', result:er})
    })

}


