
import studentDAO from "../dao/students.dao.js";
const studentController = {};

studentController.getAll = (req, res) => { //Se añade una función para el objeto studentController que más tarde será usado en students.routes.js
    //Aquí le voy a pedir el DAO los datos de los estudiantes
    studentDAO.getAll()
    .then((students) => {
        /*res.json({
            data: students
        });*/
        res.render('../src/views/index.ejs')
    })
    .catch((error) => {
        res.json({
            data: {
                message: error
            }
        })
    });
}


studentController.getOne = (req, res) => {
    studentDAO.getOne(req.params.student_id)
    .then((student) => {
        if(student != null) {
            res.json({
                data: student
            });
        } else {
            res.json({
                data: {
                    message: "Student not found"
                }
            });
        }
    })
    .catch((error) => {
        res.json({
            data: {
                message: error
            }
        })
    })
}

studentController.insert = (req, res) =>{
    studentDAO.insert(req.body)
    .then((response) => {
        res.json({
            data:{
                message: "Student saved",
                student: response
            }
        })
    })
    .catch((error) => {
        res.json({
            data:{
                message:error
            }
        })
    })
}

//Si es una promesa lleva then y catch
//La respuesta es como estaba antes del update
studentController.updateOne = (req, res) => {
    studentDAO.updateOne(req.body, req.params.student_id)
    .then((result) => {
        res.json({
            data: {
                message: "Student updated successfully",
                result: result
            }
        })
    })
    .catch((error) => {
        res.json({
            data: {
                message: error
            }
        })
    });
}

studentController.deleteOne = (req, res) => {
    studentDAO.deleteOne(req.params.student_id)
    .then((studenDeleted) => {
        res.json({
            data:{
                message: "Student deleted successfully",
                studen_deleted: studenDeleted
            }
        })
    })
    .catch((error) => {
        res.json({
            data: {
                message: error
            }
        })
    })
}



export default studentController;
