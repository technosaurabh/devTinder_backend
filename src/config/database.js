const mongoees = require("mongoose");


const dataBase = async () => {
     await mongoees.connect("mongodb+srv://technostorage10:bYHtEZi8ueOp6Kjf@cluster0.lpqx1e4.mongodb.net/devTinder")
}

module.exports = dataBase







// console.log("we are the only one things that you are doing to do that")


    




