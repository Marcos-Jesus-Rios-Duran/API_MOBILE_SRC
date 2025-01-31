//Código para hacer la consulta a la base de datos
const ClassroomDAO = {};
import Classroom from "../models/Classrooms.js";

ClassroomDAO.getAllC = async() => {
    return await Classroom.find(); //Saca los datos de la colección y los regresa al controler
}

ClassroomDAO.getOne = async(classroom_id) => {
    return await Classroom.findOne({classroom_id: classroom_id});
};

ClassroomDAO.insert = async(classroom) => {
    return await Classroom.create(classroom)
}

ClassroomDAO.updateOne = async(classroom, classroom_id) => {
    return await Classroom.findOneAndUpdate({classroom_id: classroom_id}, classroom)
}

ClassroomDAO.deleteOne = async(classroom_id) => {
    return await Classroom.findOneAndDelete({classroom_id: classroom_id});
}



export default ClassroomDAO;