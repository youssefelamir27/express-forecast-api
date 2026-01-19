// const request = require('request')
// const forecast = (latitude,longitude,callback) =>{
//     const url = "https://api.weatherapi.com/v1/current.json?key=51a20bc2793045b6b26142621220803&q=" + latitude + ',' + longitude
//        request({url,json:true},(error,response)=>{
//         // low level error 
//         if(error){
//             callback('Unable to connect weather service',undefined)
//         }
//         else if(response.body.error){
//            callback(response.body.error.message,undefined)
//         }
//         else {
//            callback(undefined,response.body.location.name + 
//             ' It is ' + response.body.current.condition.text + ' and temp is ' + response.body.current.temp_c)
//         }
//     }) 
// }
const request= require("request")

const address=process.argv[2]

const myDisplay=(address,callback)=>{
    const url=`https://api.weatherapi.com/v1/current.json?key=da0561271c924da3a80130040252811&q=${address}`
    
    request({url , json:true}, (error, response)=>{
    if(error){
        callback("error in the browser data" , undefined)
    }
    else if(response.body.error){
        callback(response.body.error.message , undefined)
    }
    else{
    //  callback(undefined,response.body.location.name + " latitude is "+response.body.location.lat+" longitude is "+response.body.location.lon+" temp now is "+response.body.current.temp_c)
     callback(undefined,{
        lat:response.body.location.lat,
        long:response.body.location.lon,
        temp:response.body.current.temp_c
     })   
    }
    


})
}
module.exports = myDisplay