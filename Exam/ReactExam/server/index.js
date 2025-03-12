import express,{json} from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { adminauth } from "./Routes/adminauth.js"

dotenv.config()


const app=express()
app.use(json())

app.use("/",adminauth)


mongoose.connect("mongodb://localhost:27017/inventorymangementsystem").then(()=>{
          console.log("Mongodb connected Sucessfully");
          
})

app.listen(process.env.PORT,function(){
          console.log(`server listening at ${process.env.PORT}`);
          
})

