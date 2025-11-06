
import express, { Request,Response } from "express";

const router = express.Router();

// router.post("/findByRole",
// async(req:Request,res:Response)=>{
//   try {
//     const {role} = req.body;
//     console.log("role",role);
    
//     if (!role) res.status(400).json({ message: "Role is required" });
    
      
//     const data = await findByRole(role);
//     return res.status(200).json(data);
//        } catch (error) {
//     console.error("Error in /findByRole:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// })

// router.get("/latestFees",
// async(_,res:Response)=>{
//   try {
//     const feehistory = await feeHistory();
//     console.log("feehistory",feehistory);
    
//     res.status(200).json(feehistory);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })