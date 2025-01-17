import { Router } from "express";
import studentsController from "../controllers/students.Controller.js"
const studentsRoutes = Router();
studentsRoutes.get('/getAll', studentsController.getAll);

export default studentsRoutes;
