//Código para hacer la consulta a la base de datos
const studentDAO = {};
import Student from "../models/Students.js";

studentDAO.getAll = async() => {
    return await Student.find(); //Saca los datos de la colección y los regresa al controler
}

studentDAO.getOne = async(student_id) => { 
    return await Student.findOne({student_id: student_id}); //atributo del documento: parámetro a recibir, el que se está buscando
};

studentDAO.insert = async(student) => {
    return await Student.create(student);
}

studentDAO.updateOne = async(student, student_id) => {
    return await Student.findOneAndUpdate({student_id: student_id}, student);
};

studentDAO.deleteOne = async(student_id) => {
    return await Student.findOneAndDelete({student_id: student_id})
}

export default studentDAO;
