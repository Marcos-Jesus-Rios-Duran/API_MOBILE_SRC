//teacherDAO
import Teacher from "../models/Teacher.js";
const teacherDAO={};
teacherDAO.getAll=async()=>{  
    return await Teacher.find();
};
export default teacherDAO