const mongoose = require('mongoose');
const connection = async () => {
   try{
    await mongoose.connect(process.env.mongoUri);
    console.log("Database Connected!!");
   }catch(err){
    console.log("Database not connected!!",err);
   }
}


module.exports = connection