//DAO DE classroom
import e from 'express';
import classroom from '../models/Classrooms.js';
const classroomController={};
classroomController.getAll=async(req,res)=>{
    try{
        const classrooms=await classroom.find();
        res.json(classrooms);
    }catch(error){
        res.status(500).send(error);
    }
}
export default classroom;