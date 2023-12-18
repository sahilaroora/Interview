// Connect to the MongoDB
const mongoose = require('mongoose');

//mongo 7 warnning
// Option strict is used before Schema and global level strictQuery
mongoose.set("debug", true);
mongoose.set("strictQuery", false);

mongoose.connect(
    "mongodb://0.0.0.0:27017/Student-api",  
    { 
        useNewUrlParser: true,
         useUnifiedTopology: true,
         
         family:4
    
    }, 
   //proper connect dont show any depricacy..
)//this method returns promise so handle it..

 
 .then(() => console.log(" successful conection ")).

     catch((e) =>{
         console.log(`no connection`)
     });
