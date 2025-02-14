import express,{json} from 'express';
import dotenv from 'dotenv'
import { userauth } from './Router/Userauth.js';
import adminauth from './Router/adminauth.js';
//import {adminsign} from './Router/adminsignup.js';
import cors from "cors"
import mongoose from 'mongoose';

dotenv.config();
const app=express();
app.use(cors({
    orgin:"http://127.0.0.1:5501",
    
}))
app.use(json())
// we can change express to app

app.use("/",userauth);
app.use("/",adminauth);
//app.use('/admin',adminsign)
app.get('/',function(req,res){
    res.send("Hello Everyone");
})
 mongoose.connect("mongodb://localhost:27017/KBACOURSES").then(()=>
 {console.log("mongoDB connected sucessfully to kba courses")})

 .catch((error)=>{
    console.error("MongoDB connection failed",error)

 })
app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
    // The app.listen(8000) method in Express is used to start the server and make it
    //  listen for incoming connections on port 8000.

    
});
// 8000 is a port value
// listen is a function at a time a subfunction both will get executed 
