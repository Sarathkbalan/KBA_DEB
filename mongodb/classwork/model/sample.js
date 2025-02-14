import { Schema } from "mongoose";
import { model } from "mongoose";
const demo=new Schema({
          firstName:{type:String,required:true},
          lastName:{type:String,required:true},
          userName:{type:String,required:true,unique:true},
          password:{type:String,required:true},
          userRole:{type:String,required:true}
          
});

const sample=model("user",demo)

const addcourse=new Schema({
          CourseName:{type:String,required:true},
          CourseId:{type:String,required:true},
          CourseType:{type:String,required:true},
          Price:{type:String,required:true},
          AddCourse:{type:String,required:true},
          image:{type:String}

})
const sample1=model("course",addcourse)


export {sample1}

export {sample}

