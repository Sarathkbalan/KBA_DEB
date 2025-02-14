import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import {sample} from "../model/sample.js";


dotenv.config();


const userauth=Router();

         userauth.post("/signup",async(req,res)=>{
               try
               {
               const {FirstName,LastName,UserName,Password,UserRole}=req.body;
               
               const existingUser=await sample.findOne({userName:UserName})
               if (existingUser){
               res.status(400).send("user already exist")
               console.log("user already exist")
               } 
               else{
               const newpassword=await bcrypt.hash(Password,10);
               console.log(newpassword);
               
               
               const newUser= new sample({
                    firstName:FirstName,
                    lastName:LastName,
                    userName:UserName,
                    password:newpassword,
                    userRole:UserRole
          
               })
               console.log(newUser);
               
                    await newUser.save();
               res.status(201).send("signup sucessfully")
               console.log("signup sucessfully")
               
               }
               
          }
          catch{
               res.status(500).send("Internal Server  Error")
          }

          })
 


          userauth.post('/login',async(req,res)=>{
               try{    
                   const {UserName,Password}=req.body;
                   const result =await sample.findOne({userName:UserName})
                    console.log(result);
                   
                   if(!result){
                       res.status(400).send("Enter a valid username");
                   }
                   else{
                      
                       const valid =await bcrypt.compare(Password,result.password);
                       console.log(valid);
                       if(valid){
                           const token = jwt.sign({username:UserName,Userrole:result.userRole} ,process.env.SECRET_KEY,{expiresIn:'1h'});
                           console.log(token);
                           
                           res.cookie("authToken",token,
                           {
                            httpOnly:true
                           });
                            res.status(200).json({message:"Logged in successfully"});
                       }
                       else{
           
                           res.status(401).send("Unauthorized access");
           
                       }
                    }
           
               }
               catch{
                   res.status(500).send("Internal Server Error")
               }
           })
                         
               userauth.get("/logout",(req,res)=>{
                    res.clearCookie("authToken");
                    res.status(200).send("sucessfully logged out")
        
                })
              
export default userauth;