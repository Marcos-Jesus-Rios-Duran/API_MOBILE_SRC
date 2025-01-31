//Router específico para manejar las rutas de estudiantes
import { Router } from "express"; //Importa el Router de Express
import classroomController from "../controllers/classrooms.Controller.js"; //Importa el controlador de classroom

const classroomRouter = Router(); //Crea una instancia del router

classroomRouter.get('/getAll', classroomController.getAllC);
classroomRouter.get('/getOne/:classroom_id', classroomController.getOne);
classroomRouter.post('/insert', classroomController.insert);
classroomRouter.put('/updateOne/:classroom_id', classroomController.updateOne);
classroomRouter.delete('/deleteOne/:classroom_id', classroomController.deleteOne);



export default classroomRouter; 

