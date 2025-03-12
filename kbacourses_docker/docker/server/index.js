import express,{json} from 'express';
import dotenv from 'dotenv';
import { userauth } from './Routes/userroute.js';
import adminauth from './Routes/adminroute.js';
import adminsign from './Routes/adminsign.js';
import cors from 'cors';
import mongoose from 'mongoose'



dotenv.config();
 
const app=express();

app.use(cors({
    origin:'*',
    credentials:true
}))

app.use(json())

app.use('/',userauth);
app.use('/',adminauth);
app.use('/admin',adminsign);




mongoose.connect('mongodb://mongodb:27017/KBA_COURSE').then(() => {
    console.log(" MongoDB connected successfully to KBA_COURSE");})
    .catch((error) => {
        console.error(" MongoDB connection failed:", error);
    });

app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
});