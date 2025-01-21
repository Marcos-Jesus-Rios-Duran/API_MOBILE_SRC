//Classrooms routes
import { Router } from 'express';
const classroomRouter = Router();
import classroomController from '../controllers/classrooms.Controller.js';
classroomRouter.get('/getAll', classroomController.getAll);
export default classroomRouter; // Exportamos el router
