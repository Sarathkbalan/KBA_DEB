import { Schema } from "mongoose";
import { model } from "mongoose";

const Certificateschema=new Schema
       ({     
         certificateId: {type: String,required: true,unique: true},
          selectCourse:{type: String,required:true},
          CandidateName:{type: String,required:true},
          selectGrade:{type:String,required:true},
          issueDate:{type:Date,required:true,default:Date.now}
         })

    const certificate=model('Certificate',Certificateschema);
   export{certificate}

                   