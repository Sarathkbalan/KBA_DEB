import express,{json} from 'express';
import dotenv from 'dotenv';
import userauth from './Router/userauth.js';
import adminauth from './Router/adminauth.js';
import mongoose from 'mongoose';

dotenv.config()

const app=express();
app.use(json())
app.use("/",userauth);
app.use("/",adminauth);

app.get('/',function(req,res){
    res.send("Hello Everyone");
})
mongoose.connect("mongodb://localhost:27017/certiapp").then(()=>
    {console.log("mongoDB connected sucessfully to certiapp")})
   
    .catch((error)=>{
       console.error("MongoDB connection failed",error)
   
    })
 
app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
});