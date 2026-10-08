import express from "express";
import { Router } from "express";
import employeeRouter from "#api/employees";

const app = express();
export default app;

// TODO: this file!
app.use(express.json())

app.use("/employees", employeeRouter)

app.use((err, req, res, next) =>{
    return res.status(500).send("something went wrong" )
})