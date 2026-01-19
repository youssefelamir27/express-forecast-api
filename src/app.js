const express = require("express")
const app=express()
const port= process.env.PORT || 3002

// app.get("/",(req,res)=>{
//     res.send("hello everybodyyy")
// })
app.set('view engine', 'hbs');
///////////////////////////////////////////////////////////////////////
// for static file
const path=require("path");
const publicDirectory=path.join(__dirname,"../public")
app.use(express.static (publicDirectory))
// //////////////////////////////////////////////////////////////////////////
app.get("/", (req,res)=>{
    res.render("index")
    
})
// //////////////////////////////////////////////////////////////////////
// const forecast=require("./tools/forecastFile")
// app.get("/weather", (req, res) => {
//     if (!req.query.address) {
//         return res.render("weather", { 
//             error: 'You must provide address' 
//         });
//     }
    
//     forecast(req.query.address, (error, data) => {
//         if (error) {
//             return res.render("weather", { error });
//         }
//         res.render("weather", { 
//             data: data,
//             address: req.query.address 
//         });
//     });
// });

// ///////////////////////////////////////////////////
const forecast=require("./tools/forecastFile")
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        res.send("Enter an address please")
    }
    else{
        forecast(req.query.address,(error,data)=>{
            if(error){
                res.send({error})
            }
            else{
                res.send({data,address:req.query.address})
            }
        })
    }
})

// ////////////////////////////////////////////////////////////////////////////////
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)

})