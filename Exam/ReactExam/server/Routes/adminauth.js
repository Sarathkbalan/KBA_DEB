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

adminauth.get("/allitems", async (req, res) => {
     try {
       const items = await sample.find();
       res.status(200).json(items);
     } catch (error) {
       res.status(500).json({ msg: "Internal server error" });
     }
   });
   

export{ adminauth}