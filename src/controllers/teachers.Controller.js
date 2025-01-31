import teacherDAO from "../dao/teachers.dao.js";
const teacherController = {};

teacherController.getAllT = (req, res) => { //Se añade una función para el objeto studentController que más tarde será usado en students.routes.js
    //Aquí le voy a pedir el DAO los datos de los estudiantes
    teacherDAO.getAllT()
    .then((teachers) => {
        res.json({
            data: teachers
        });
    })
    .catch((error) => {
        res.json({
            data: {
                message: error
            }
        })
    });
}

teacherController.getOne = (req, res) => {
    teacherDAO.getOne(req.params.teacher_number)
    .then((teacher) => {
        if(teacher != null) {
            res.json({
                data: teacher
            });
        } else {
            res.json({
                data: {
                    message: "Teacher not found"
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


teacherController.insert = (req, res) => {
    teacherDAO.insert(req.body)
    .then((response) => {
        res.json({
            data: {
                message: "Teacher saved",
                teacher: response
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


teacherController.updateOne = (req, res) => {
    teacherDAO.updateOne(req.body, req.params.teacher_number)
    .then((result) => {
        res.json({
            data: {
                message: "Teacher updated successfully",
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
    })
}


teacherController.deleteOne = (req, res) => {
    teacherDAO.deleteOne(req.params.teacher_number)
    .then((teacherDeleted) => {
        res.json({
            data: {
                message: "Teacher deleted successfully",
                teacher_deleted: teacherDeleted
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



export default teacherController;
