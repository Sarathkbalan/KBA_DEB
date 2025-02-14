import {Router} from "express";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";
import dotenv from "dotenv";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/admincheck.js";


dotenv.config();
const userauth=Router();
// const user=new Map()
// const Course=new Map()

userauth.get('/',(req,res)=>{
    console.log('HI')
    res.send("Hello Everyone ")

});
userauth.post("/signup",async(req,res)=>{
    try
    {

  


    const {FirstName,LastName,UserName,Password,UserRole}=req.body;
    
    
    if (user.get(UserName)){
        res.status(400).send("user already exist")
        console.log("user already exist")
    } else{
        const newpassword=await bcrypt.hash(Password,10);
        user.set(UserName,{FirstName,LastName,newpassword,UserRole})
        console.log(user.get(UserName));
        
        res.status(201).send(user.get(UserName))
        //console.log(user.get(UserName))
       
       
    }
    
}
catch{
    res.status(500).send("Internal Server  Error")
}
// finally{

// }
})

userauth.post('/login',async(req,res)=>{
    try{    
        const {UserName,Password}=req.body;
        const result = user.get(UserName);
         console.log(result);
        
        if(!result){
            res.status(400).send("Enter a valid username");
        }
        else{
            console.log(result.newpassword);
            const valid =await bcrypt.compare(Password,result.newpassword);
            console.log(valid);
            if(valid){
                const token = jwt.sign({UserName:UserName,UserRole:result.UserRole} ,process.env.SECRET_KEY,{expiresIn:'1h'});
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

        
        userauth.post('/addcourse',authenticate,adminCheck,(req,res)=>{
            try{
           // if(req.role==="admin"){
            const{Coursename,Courseid,Coursetype,price,Addcourse}=req.body;
            if(Course.get(Coursename)){
                res.status(400).json({msg:"Bad Request"})
            }else{
                Course.set(Coursename,{Courseid,Coursetype,price,Addcourse})
                res.status(201).send("Added sucessfully")
                console.log(Course.get(Coursename));
                
            }
            // }else{
            //       res.status(403).json({msg:"you not allowed to do this"})
            // }
        }
        catch{

        }
        });

        userauth.get("/logout",(req,res)=>{
            res.clearCookie("authToken");
            res.status(200).send("sucessfully logged out")

        })
        
        export{userauth};