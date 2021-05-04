import axios from 'axios';


export const doLogin = (params,cb) =>{

    axios.post("http://127.0.0.1:8000/api/token/", params)
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

    axios.post("http://127.0.0.1:8000/api/events/", params,config)
    .then(result=>{
        callback({status:'success', result:result.data})
    })
    .catch(errors =>{
        callback({status:'fail', errors:errors})
    })

}
export const eventList = (callback) =>{
    axios.get("http://127.0.0.1:8000/api/events/")
    .then(resp=>{
        callback({status:'success', result:resp.data })
        
    })
    .catch(erroneous=>{
        callback({status:'failed', result:erroneous})
    })
}
export const rsvpApi = (param,callb) =>{
    axios.post("http://127.0.0.1:8000/api/tinypesa/start/", param)
    .then(resss=>{
        callb({status:'success', result:resss.data})
    })
    .catch(er=>{
        callb({status:'failed', result:er})
    })

}


