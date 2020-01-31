
 
 
 function callPostApiNoHeadr(url, params){

    return fetch(url,{
            
        method:"POST",
        headers:{
        'Content-Type': 'application/json',
        'Authorization': 'application/json'
        },
        
        body:JSON.stringify(params)
    }).then((response)=>response.json())
    .then((resposneData)=>{
         
        return resposneData
    })
    .catch((error)=>{
        console.error(error);
        return error
            
    })
} 


function callPostApiWithHeader(token,url, params){

    return fetch(url,{
            
        method:"POST",
        body:JSON.stringify(params),
        headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token,
            

        },
        
    }).then((response)=>response.json())
    .then((resposneData)=>{
         
        return resposneData
    })
    .catch((error)=>{
        console.error(error);
        return error
            
    })
} 


function getApiWithoutHeader(token,url){
    return fetch(url,{
        method:"GET",
        headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token,

    },}).then((response)=>response.json()).then((responseData)=>{
        return responseData
    }).catch((error)=>{
        console.error(error);
        return error
    })
}

export  {callPostApiNoHeadr,callPostApiWithHeader,getApiWithoutHeader}


