import {Router} from "express";
import authenticate from "../Middleware/auth.js";
import adminCheck1 from "../Middleware/admincheck.js";
import { sample1 } from "../model/sample.js";
import upload from "../Middleware/update.js";


const adminauth=Router();

// const Course=new Map()

adminauth.post('/addcourse',authenticate,adminCheck1,upload.single("courseimage"),async(req,res)=>{

    try{

         
         
       const {Coursename,Courseid,Coursetype,price,Addcourse}=req.body;
    //    value are collected from postman

       const newUser1=await sample1.findOne({CourseName:Coursename})
    
        

          if(newUser1){
              res.status(400).json({msg:"book already exist"})
          }else{ 
            const imagepath=req.file ? req.file.path:"";
            const courses=new sample1({
                CourseName:Coursename,
                CourseId:Courseid,
                CourseType:Coursetype,
                Price:price,
                AddCourse:Addcourse,
                image:imagepath
        //    ist name in Schema:postman name in secound value        

            })
            console.log(courses);
             await courses.save();
              res.status(201).send("courses added sucessfully")
              console.log("course added");
              

          }
      }
      catch{
            res.status(500).send("internal server error")
      }
      });



    //   here params used to create a route to get an information

    //   adminauth.get('/getcourse/:cname',(req,res)=>{

    //     const name=req.params.cname
    //     console.log(name);
        

    //   })
   //   here query used to create a route to get an information
    // adminauth.get('/getcourse/',(req,res)=>{

    //         const name=req.query.coursename;
    //         console.log(name);
            
    //         const Courses=Course.get(name)
    //         if(Course){
                
    //             res.status(200).json({data:Courses})
    //             console.log(Courses);
                
    //         }else{
    //             res.status(404).send("course not found")
    //             console.log("course not found");
                
    //         }
    //     })

     adminauth.put('/updateCourse',authenticate,adminCheck1,async(req,res)=>{
        try{
            const{Coursename,Courseid,Coursetype,price,Addcourse}=req.body;
            const result=await sample1.findOne({CourseName:Coursename})
            if(result){
               result.CourseName=Coursename,
               result.CourseId=Courseid,
               result.CourseType=Coursetype,
               result.Price=price,
               result.AddCourse=Addcourse
               console.log(result);
               
                    await result.save();
                    res.status(201).send("update sucessfully")
                    }
                    else{
                        
                   res.status(400).json({msg:"Bad Request"})
            }
                   
        
                }
                catch{
                    res.status(500).send("internal server error")
                }
            })
              adminauth.patch('/editCourse',authenticate,adminCheck1,async(req,res)=>{
                try{
            const{Coursename,price,Coursetype}=req.body;
            const result1=await sample1.findOne({CourseName:Coursename})

          
            
                        if(result1){
                        result1.CourseName=Coursename,
                        result1.CourseType=Coursetype,
                        result1.Price=price
                        
                        await result1.save();
                        res.status(200).send("update sucessfully")
                        // res.status(202).send(Coursename)
                        console.log(result1);
                    }else{
                        
                        res.status(404).json({msg:"Bad Request"})
                    }
                }
                catch{
                    res.status(500).send("internal server error")
                }
            })
            adminauth.delete("/deleteCourse",authenticate,adminCheck1,async(req,res)=>{
                try{
                    const name=req.query.Coursename
                    const result2=await sample1.findOneAndDelete({CourseName:name})
                    
                    if(result2){
                        
                        res.status(400).send("deleted")
                        
                    }
                    else{
                        console.log("error");
                        
                    }
                }
                catch{
                    res.status(500).send("internal server error")
                }

            })






      export default adminauth