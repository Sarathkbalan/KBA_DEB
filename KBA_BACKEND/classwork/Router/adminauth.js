import {Router} from "express";
import authenticate from "../Middleware/auth.js";
import adminCheck from "../Middleware/admincheck.js";

const adminauth=Router();

const Course=new Map()

adminauth.post('/addcourse',authenticate,adminCheck,(req,res)=>{
          try{
          
          const{Coursename,Courseid,Coursetype,price,Addcourse}=req.body;
          if(Course.get(Coursename)){
              res.status(400).json({msg:"Bad Request"})
          }else{
              Course.set(Coursename,
                {Courseid,
                Coursetype,
                price,
                Addcourse})
              res.status(201).send(Course.get(Coursename))

          }
      }
      catch{

      }
      });



    //   here params used to create a route to get an information

    //   adminauth.get('/getcourse/:cname',(req,res)=>{

    //     const name=req.params.cname
    //     console.log(name);
        

    //   })
   //   here query used to create a route to get an information
    adminauth.get('/getcourse/',(req,res)=>{

            const name=req.query.coursename;
            console.log(name);
            
            const Courses=Course.get(name)
            if(Course){
                
                res.status(200).json({data:Courses})
                console.log(Courses);
                
            }else{
                res.status(404).send("course not found")
                console.log("course not found");
                
            }
        })

     adminauth.put('/updateCourse',authenticate,(req,res)=>{
        try{
        if(req.role=="admin"){
            const{Coursename,Courseid,Coursetype,price,Addcourse}=req.body;
            if(Course.get(Coursename)){
                Course.set(Coursename,
                    {Courseid,
                    Coursetype,
                    price,
                    Addcourse})
                    res.status(201).send("update sucessfully")
                    }
                    else{
                        
                   res.status(400).json({msg:"Bad Request"})
            }}
                    else{
                  res.status(403).json({msg:"you are not allowed to do this"})
            }
        
    }
    catch{
        
    }
})
adminauth.patch('/editCourse',authenticate,(req,res)=>{
    try{
const{Coursename,price,Coursetype}=req.body;
const result=Course.get(Coursename)
console.log(result);

if(result){
    Course.set(Coursename,
        {
        Courseid:result.Courseid,
        Coursetype,Coursetype,

        price})
        // res.status(200).send("update sucessfully")
        res.status(202).send(Coursename)
     }else{
                        
        res.status(404).json({msg:"Bad Request"})
    }
    }
    catch{
        
    }
})
adminauth.delete("/deleteCourse",(req,res)=>{
    try{
        
        const coursename=req.query.Coursename
        console.log(coursename)
        if(Course.get(coursename)){
            Course.delete(coursename)
            res.status(400).send("deleted")
            console.log(Course);
        }
        else{
            console.log("error");
            
        }
    }
    catch{

    }

})






      export default adminauth