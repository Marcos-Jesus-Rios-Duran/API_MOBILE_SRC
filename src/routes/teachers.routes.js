//Teachers Rouetes
import { Router } from 'express';
const teacherRouter = Router();
import teacherController from '../controllers/teachers.Controller.js';
teacherRouter.get('/getAll', teacherController.getAll);

export default teacherRouter; // Exportamos el router