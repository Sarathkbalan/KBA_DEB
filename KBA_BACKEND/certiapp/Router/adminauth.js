import {Router} from "express";
import authenticate from "../middleware/authenticate.js";
import adminCheck1 from "../middleware/admincheck.js";
import { certificate } from "../model/certificate.js";

const adminauth=Router();

adminauth.post('/issuecertificate', authenticate, adminCheck1, async (req, res) => {
    try {
     

        const { selectcourse, certificateid, Candidatename, Selectgrade, issuedate } = req.body;

       
        const existingCertificate = await certificate.findOne({ certificateId:certificateid });
        if (existingCertificate) {
            return res.status(400).json({ msg: "Certificate with this ID already exists" });
        }


        const newCertificate = new certificate({
            certificateId:certificateid,
            selectCourse:selectcourse,
            CandidateName:Candidatename,
            selectGrade:Selectgrade,
            issueDate:issuedate
        });

        await newCertificate.save();
        res.status(201).json({ msg: "Certificate added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});  

      adminauth.get('/getcourse/',async(req,res)=>{
        try
        {
            const name=req.query.id
            console.log(name);

            const Certi= await certificate.findOne({certificateId:name})

            if(Certi){
                
                res.status(200).send(Certi)
                console.log(Certi);
                
            }else{
                res.status(404).send("certificateid not found")
                console.log("certificateid not found");
                
            }
            
        }
        catch{
            res.status(500).send("internal server error")
        }
      });
      export default adminauth;
