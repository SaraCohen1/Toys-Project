// 3
const mongoose = require('mongoose');
const {config} =require("../config/secret")

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery' , false);
    
  await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster1.h6yht2c.mongodb.net/toys-pro`);
  console.log("mongo connect toys-project")
  
}
