import express from "express";
import {
    getEmployees,
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
} from "#db/queries/employees"

const router = express.Router();

router.get("/", async (req,res)=>{
    const allEmployees = await getEmployees()
    res.status(200).json(allEmployees)
})

router.post("/", async(req,res)=>{
    const newEmployee = await createEmployee(req.body)
    if(!newEmployee) return res.status(600).send("something went wrong")
    return res.status(201).json(newEmployee)
});

router.get("/:id", async(req,res)=>{
    const {id} = req.params;
    const employee = await getEmployee(id);
    if (!employee) return res.status(404).send("not found")
    return res.status(200).json(employee);
})

router.delete("/:id", async(req,res)=>{
    const {id} = req.params;
    const employee = await deleteEmployee(id);
    if (!employee) return res.status(404).send("not found")
    return res.status(204);
})


router.put("/:id", requireBody(["name", "birthday", "salary"]), async (req,res) => {
    const {id} = req.params;
    const updatedEmployee = await updateEmployee({ ...req.body, id});
    if(!updatedEmployee) return res.status(404).send("not found");
    res.status(200).json(updatedEmployee);
})

export default router;

function requireBody(fields){
    return (req, res, next) =>
        {if (!req.body) return res.status(400).send("requires body")
         
        const missingField = fields.filter((field)=> !(field in req.body) )
        if (missingField.length > 0) return res.status(400).send(`missing fields ${missing.join(',')}`)
        next();
    };
};


// TODO: this file!
