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
export {sample}
