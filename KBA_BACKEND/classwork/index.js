import express,{json} from 'express';
import dotenv from 'dotenv'
import { userauth } from './Router/Userauth.js';
import {adminsign} from './Router/adminsignup.js';
import {adminauth} from './Router/adminauth.js';
import cors from "cors"

dotenv.config();
const app=express();
app.use(cors({
    orgin:"http://127.0.0.1:5501",
    
}))
app.use(json())
// we can change express to app

app.use("/",userauth);
app.use('/admin',adminsign)
app.use("/",adminauth)
app.get('/',function(req,res){
    res.send("Hello Everyone");
})
 
app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
    // The app.listen(8000) method in Express is used to start the server and make it
    //  listen for incoming connections on port 8000.

    
});
// 8000 is a port value
// listen is a function at a time a subfunction both will get executed 
