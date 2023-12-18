const express = require('express');
const app = express();
 require('./database/db.js')
const rout= require('./Routes.js/routes.js')
const cors = require('cors')
const bodyParser= require('body-parser')




const PORT =8000;

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/',rout)



app.listen(PORT,()=>{
    console.log(`server is sucessfully running on Port  ${PORT}`)
})