//aqui va la configuracion del servidor 
import express from 'express';
import morgan from 'morgan';
//importaciones de archivos creados
import studentsRoutes from './routes/students.routes.js'
import teachersRoutes from './routes/teachers.routes.js'
import classroomsRoutes from './routes/classrooms.routes.js'
const app = express();
//settings
app.set('port',process.env.PORT||3000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
// Rouetes
app.use("/api/students",studentsRoutes)
app.use("/api/teachers",teachersRoutes)
app.use("/api/classrooms",classroomsRoutes)
export default app;