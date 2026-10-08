import express from "express";
const router = express.Router();

router.get("/", (req,res)=>{
    return res.send("Welcome to the Fullstack Employees API.")
})

export default router;

// TODO: this file!
