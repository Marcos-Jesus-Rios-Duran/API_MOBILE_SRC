//Router específico para manejar las rutas de estudiantes
import { Router } from "express"; //Importa el Router de Express -administra rutas
import teacherController from "../controllers/teachers.Controller.js"; //Importa el controlador de teacher

const teacherRouter = Router(); //Crea una instancia del router

teacherRouter.get('/getAll', teacherController.getAllT);
teacherRouter.get('/getOne/:teacher_number', teacherController.getOne);
teacherRouter.post('/insert', teacherController.insert);
teacherRouter.put('/updateOne/:teacher_number', teacherController.updateOne);
teacherRouter.delete('/deleteOne/:teacher_number', teacherController.deleteOne);



export default teacherRouter; 

