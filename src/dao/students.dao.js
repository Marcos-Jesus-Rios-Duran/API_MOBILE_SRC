//DAO
import Students from "../models/Students.js";
const studentDAO={};
studentDAO.getAll=async()=>{
return await Students.find();
};
export default studentDAO;