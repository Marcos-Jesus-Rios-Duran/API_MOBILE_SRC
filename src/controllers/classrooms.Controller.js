//Classrooms CONTROLLER
import classroom from '../dao/classrooms.dao.js';
const classroomController={};
classroomController.getAll=async(req,res)=>{
    try{
        const classrooms=await classroom.find();
        res.json(classrooms);
    }catch(error){
        res.status(500).send(error);
    }
}
export default classroomController;