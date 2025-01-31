//Router específico para manejar las rutas de estudiantes
import { Router } from "express"; //Importa el Router de Express
import studentController from "../controllers/students.Controller.js"; //Importa el controlador de student

const studentRouter = Router(); //Crea una instancia del router

studentRouter.get('/getAll', studentController.getAll);
studentRouter.get('/getOne/:student_id', studentController.getOne);
studentRouter.post('/insert', studentController.insert);
studentRouter.put('/updateOne/:student_id', studentController.updateOne);
studentRouter.delete('/deleteOne/:student_id', studentController.deleteOne);



export default studentRouter; 

