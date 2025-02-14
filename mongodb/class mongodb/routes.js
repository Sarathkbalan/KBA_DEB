import { Router } from "express";
import {sample} from './sample.js'
const user=Router()
user.post('/create',async(req,res)=>{
          try{
              const data=req.body;
              const result=await sample.create(data);
              res.status(201).send(result)
          }catch(error){
              console.log(error);
              res.status(500).send("Internal Server error")
              
          }
      })
      user.get("/read",async(req,res)=>{
        try{
             const result=await sample.findById("67a1cca4d05c4c85208ec11d")
             res.status(200).send(result); 
        }
        catch(error)
        {
          console.log(error);
          res.status(500).json()
          
        }
      })
      
      export {user}