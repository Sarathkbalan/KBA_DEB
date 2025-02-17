import { Schema } from "mongoose";
import { model } from "mongoose";

const inventory=new Schema({
          itemName:{type:String,required:true,},
          category:{type:String,required:true,},
          quantity:{type:String,required:true,},
          price:{type:String,required:true,}

})
const sample=model("inventory",inventory)
export {sample}