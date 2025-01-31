//Código para hacer la consulta a la base de datos
const TeacherDAO = {};
import Teacher from "../models/Teacher.js";

TeacherDAO.getAllT = async() => {
    return await Teacher.find(); //Saca los datos de la colección y los regresa al controller
}

TeacherDAO.getOne = async(teacher_number) => {
    return await Teacher.findOne({teacher_number: teacher_number});
};

TeacherDAO.insert = async(teacher) => {
    return await Teacher.create(teacher);
}

TeacherDAO.updateOne = async(teacher, teacher_number) => {
    return await Teacher.findOneAndUpdate({teacher_number: teacher_number}, teacher);
};

TeacherDAO.deleteOne = async(teacher_number) => {
    return await Teacher.findOneAndDelete({teacher_number: teacher_number});
}


export default TeacherDAO;
