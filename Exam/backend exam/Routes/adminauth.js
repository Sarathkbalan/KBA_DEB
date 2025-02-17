import { Router } from "express";
import { sample } from "../model/sample.js";



const adminauth=Router()



adminauth.post("/additems",async(req,res)=>{
     try{
          const{ItemName,Category,Quantity,Price}=req.body
          const added=await sample.findOne({itemName:ItemName})
          if(added){
               res.status(400).json({msg:"itemname already exist"})
          }else{
               const result=new sample({
                    itemName:ItemName,
                    category:Category,
                    quantity:Quantity,
                    price:Price
               

               }) 
                    await result.save()
                    console.log(result);
                    
                    res.status(200).json({msg:"itemname added"})


          }


     }catch{
          res.status(500).json({msg:"Internal server error"})
     }
})

adminauth.get("/items",async(req,res)=>{
          try{ 
               const name=req.query.itemName
               console.log(name);

               
               const added=await sample.findOne({itemName:name})
               console.log(added);
               

               if(added){
                    res.status(200).json({added})
                    
               }else{
                    res.status(400).json({msg:"itemname don't exist"})

               }


     
          }catch{
               res.status(500).json({msg:"Internal server error"})
          }
     })
 adminauth.put("/update",async(req,res)=>{
          try{

               const{ItemName,Category,Quantity,Price}=req.body
               const added=await sample.findOne({itemName:ItemName})
          if(added){
               
                    added.itemName=ItemName,
                    added.category=Category,
                    added.quantity=Quantity,
                    added.price=Price
                    
                    
               
               await added.save()
               console.log(added);
               
               res.status(200).json({msg:"itemname added"})
          }else{
               res.status(400).json({msg:"itemname already exist"})


          }


     }catch{
          res.status(500).json({msg:"Internal server error"})
     }
})
 adminauth.delete("/delete",async(req,res)=>{
          try{
               const {ItemName}=req.body
               const added=await sample.findOneAndDelete({itemName:ItemName})
               console.log(added);
               
               if(added){
                    res.status(200).json({msg:"deleted sucessfully "})

               }else{
                    res.status(400).json({msg:"not deleted"})

               }


     
          }catch{
               res.status(500).json({msg:"Internal server error"})
          }
     })    



export{ adminauth}