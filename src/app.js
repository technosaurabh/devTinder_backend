// this is offical devTinder project

console.log("this is offical devTinder project");

const express = require('express');

const app = express();


app.use('/', (err, req, res, next)=>{
    console.log("this is the middleware")
    // next();
    res.status(500).send("something went wrong first route handler ")
})





app.post("/getUserData", (req,res, next) => {
    console.log("this is getUserData");
    throw new Error("something went wrong");
    res.send("this is post api");
})


app.get("/getUserData", (req,res, next) => {
    console.log("this is getUserData");
    throw new Error("something went wrong");
    res.send("this is post api");
})

app.get("/gototinderdata", (req,res, next) => {
    console.log("this is getUserData");
    throw new Error("something went wrong");
    res.send("this is post api");
})

app.post("/inamin", (req,res, next) => {
    console.log("this is getUserData");
    throw new Error("something went wrong");
    res.send("this is post api");
})


app.use('/', (err,  req, res, next)=>{
    console.log("this is last error handle")
    // next();
    res.status(500).send("something went wrong first route handler ")
})








// app.use('/getUserData', (req,res) => {
//     res.send("we are developers")
// })





app.listen(3000, ()=>{
    console.log("server is running on 3000 port")
});