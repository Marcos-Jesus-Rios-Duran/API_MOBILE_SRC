import { Router } from "express";
const studentsRoutes=Router();
studentsRoutes.get('/getOne',(req,res)=>{
    res.json({
        data:"Student"
    })
})
export default studentsRoutes;