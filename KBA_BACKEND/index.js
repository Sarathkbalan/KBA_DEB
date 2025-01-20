import express from 'express';
import dotenv from 'dotenv'
import { userauth } from './Router/Userauth.js';


dotenv.config();
const app=express();
// we can change express to app

app.use("/",userauth);

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
