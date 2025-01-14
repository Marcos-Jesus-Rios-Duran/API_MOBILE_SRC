//aqui va la configuracion del servidor 
import express from 'express';
import morgan from 'morgan';
//importaciones de archivos creados
import studentsRoutes from './routes/students.routes.js'
const app = express();
//settings
app.set('port',process.env.PORT||3000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
// Rouetes
app.use("/api/students",studentsRoutes)
export default app;