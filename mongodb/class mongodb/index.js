import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { user } from "./routes.js";

dotenv.config()
const app=express();
app.use(express.json());
app.use("/",user);
const port=process.env.PORT;

app.listen(port,()=>{
          console.log(`server is running ${port}`)
})
mongoose.connect("mongodb://localhost:27017/demo")