const express= require('express');
const cors= require('cors')
const stringRouter = require('./router/stringRoute')
const mongoose = require('mongoose');
const db = 'mongodb+srv://celinaish2021:celinstringFetch@cluster0.pvnkwzz.mongodb.net/stringFetch?retryWrites=true&w=majority'
mongoose.connect(db).then(()=>{console.log('Db connection established');}).catch((e)=>console.log(e))

 const app= express()

 const port = 3000;

 app.use(cors())
 app.use(express.json())
 app.use('/',stringRouter)

 app.listen(port,()=>{
    console.log('Server is up in port',port);
 })


//  celinstringFetch - mongodb pswd

// connection string - mongodb+srv://celinaish2021:<password>@cluster0.pvnkwzz.mongodb.net/?retryWrites=true&w=majority