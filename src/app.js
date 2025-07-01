// this is offical devTinder project

console.log("this is offical devTinder project");

const express = require('express');

const app = express();

// app.get('/', (req, res)=>{
//     res.send("hello world")
// })

app.use("/getUserData", (req,res, next) => {
    
    
    console.log("after the next")
    // res.send("we are testers")
    next();
}, (req,res, next)=>{
    // res.send("we are devs")
    console.log("we are devs")

    next();
})







// app.use('/getUserData', (req,res) => {
//     res.send("we are developers")
// })




app.use('/', (req,res) => {
    res.send("this is deafult case")
})



app.listen(3000, ()=>{
    console.log("server is running on 3000 port")
});