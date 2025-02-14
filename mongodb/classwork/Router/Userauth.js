import {Router} from "express";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";
import dotenv from "dotenv";
//import authenticate from "../Middleware/auth.js";
import {sample} from "../model/sample.js";
import { sample1 } from "../model/sample.js";




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

  
    //console.log(req.body);
    // const data=req.body;
    // // console.log(data.UserName);
    // userauth.set(data.UserName,{FirstName:data.FirstName,LastName:data.Lastname,
    // Username:data.Username,password:data.password,UserRole:data.UserRole})
    // consoleapp.use("/",userauth);

    const {FirstName,LastName,UserName,Password,UserRole}=req.body;
    
    // console.log(FirstName)"user already exist"

    //console.log(newpassword)
    //user.set(UserName,{FirstName,LastName,newpassword,UserRole})
    //console.log(user.get(UserName));
    const existingUser=await sample.findOne({userName:UserName})
    if (existingUser){
        res.status(400).send("user already exist")
        console.log("user already exist")
    } 
    else{
        const newpassword=await bcrypt.hash(Password,10);
        
        // user.set(UserName,{FirstName,LastName,newpassword,UserRole})
        // console.log(user.get(UserName));
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
        //console.log(user.get(UserName))
        console.log("signup sucessfully")
       
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
        const result =await sample.findOne({userName:UserName})
         console.log(result);
        
        if(!result){
            res.status(400).send("Enter a valid username");
        }
        else{
            // console.log(result.newpassword);
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
userauth.get("/getcourse",async(req,res)=>{
    try{ 
    
          const name=req.query.coursename    
          const added=await sample1.findOne({CourseName:name})
             if (added){
                 res.status(201).send(added);
                 console.log("course fetched sucessfully");
        
                      }
               else {
                   res.status(400).send("course not found")
                     }
       }
    catch{
        res.status(500).send("internal server error")
    }
})
        
        
// userauth.post('/addcourse',authenticate,(req,res)=>{
//             try{
//             if(req.role==="Admin"){
//             const{Coursename,Courseid,Coursetype,price,Addcourse}=req.body;
//             if(Course.get(Coursename)){
//                 res.status(400).json({msg:"Bad Request"})
//             }else{
//                 Course.set(Coursename,{Courseid,Coursetype,price,Addcourse})
//                 res.status(201).send("Added sucessfully")

//             }}else{
//                   res.status(403).json({msg:"you not allowed to do this"})
//             }
//         }
//         catch{

//         }
//         });

        userauth.get("/logout",(req,res)=>{
            res.clearCookie("authToken");
            res.status(200).send("sucessfully logged out")

        })
        
        export{userauth};