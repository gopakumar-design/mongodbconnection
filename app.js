const express=require('express');

const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser')
//const Port=process.env.Port||3000;
require('dotenv/config');

app.use(bodyparser.json());
//middlewares
app.use('/posts',()=>{
    console.log('this is a middleware running');
});

//import routes
 
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);


//Routes
app.get('/',(req,res)=>{
    res.send('we are on home');
});

//connection to db
mongoose.connect(process.env.DB_CONNECTION,
 {useNewUrlParser: true, useUnifiedTopology: true},()=>
console.log('connected to DB!')
);

app.listen(3000);//,()=>console.log("Server started"));