import { response } from "express";
import classroomDAO from "../dao/classrooms.dao.js";
import Classroom from "../models/Classrooms.js";
const classroomController = {};

classroomController.getAllC = (req, res) => { //Se añade una función para el objeto studentController que más tarde será usado en students.routes.js
    //Aquí le voy a pedir el DAO los datos de los estudiantes
    classroomDAO.getAllC()
    .then((classrooms) => {
        res.json({
            data: classrooms
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


classroomController.getOne = (req, res) => {
    classroomDAO.getOne(req.params.classroom_id)
    .then((clasroom) => {
        if(clasroom != null) {
            res.json({
                data: clasroom
            });
        } else {
            res.json({
                data: {
                    message: "Classroom not found"
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

classroomController.insert = (req, res) => {
    classroomDAO.insert(req.body)
    .then((response) => {
        res.json({
            data: {
                message: "Classroom saved",
                classroom: response
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

classroomController.updateOne = (req, res) => {
    classroomDAO.updateOne(req.body, req.params.classroom_id)
    .then((result) => {
        res.json({
            data: {
                message: "Classroom updated successfully",
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

classroomController.deleteOne = (req, res) => {
    classroomDAO.deleteOne(req.params.classroom_id)
    .then((classroomDeleted) => {
        res.json({
            data: {
                message: "Classroom deleted successfully",
                classroom_deleted: classroomDeleted
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





export default classroomController;
