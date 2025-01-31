//Aquí va toda la configuración del servidor
import express from 'express'; //Importa el framework 'express'
import morgan from 'morgan'; //Importa el middleware de logging 'morgan'
import ejs from 'ejs';
import studentRoutes from './routes/students.routes.js'; //Importa las rutas relacionadas con estudiantes
import teacherRouter from './routes/teachers.routes.js';
import classroomRouter from '../src/routes/classrooms.routes.js';

const app = express(); //instancia o aplicación de servidor - crea una instancia de la apliación Express

//Settings

app.set('port', process.env.PORT || 3000); //Configura el puerto del servidor (usa variable de entorno PORT o 3000 por defecto)
app.set('view engine',ejs);

//Middlewares
app.use(express.json()); //Para que los datos que reciba en formato JSON los entienda
app.use(express.urlencoded({extended: true})); //Para que entienda datos de formularios html
app.use(morgan('dev')); //Activa el logging en modo desarrollo

//Routes
app.use("/api/students", studentRoutes); //Todas las rutas de estudiantes comenzarán con "/api/students"
app.use("/api/teachers", teacherRouter);
app.use("/api/classrooms", classroomRouter);


export default app;