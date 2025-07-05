const express = require('express');
const app = express();
const database = require('./config/database')
const User = require('./models/user')

app.use(express.json());


app.post('/signup', async (req,res)=>{
    const user = new User(req.body);
    console.log(req.body, "res.body")
    await user.save();
    res.send("User Added Succesfully");
})


app.get("/feed", async(req, res) =>{
    try {
        const findUser =  User.find();
        console.log(findUser, "finduser")
        res.send(findUser);
    } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong =>", error);
    }
   
})

app.delete('/delete', async(req, res)=>{
    try {
    await User.findByIdAndDelete('6867f63304eb17b3f60c8389');
      res.send("User Deleted sucesfully");
    } catch (error) { 
        res.status(500).send("something went wrong");
    }
} )


app.patch('/user', async (req, res)=>{
    const updateData =  req.body;
    console.log(updateData, "update Data")
    try {
       const data =  await User.findByIdAndUpdate('68682798557693f71569987a', updateData);
       console.log(data, "updated data")
       res.send("User Data Updated")
    }catch(err){
        next(err)
    }
}) 

app.use('/', (err, req, res, next)=>{
    if(err){
        res.status(500).send("something went wrong error =>", err );
    }
} )




database().then(()=>{
    console.log('database connected sucesfully');
    app.listen(3000, ()=>{
        console.log("server is running on 3000 port");
    });
}).catch((err) => {
    console.log(`the database is not connected sucesfully (error)=> ${err} `);

    console.log("saurbah kumar")
})