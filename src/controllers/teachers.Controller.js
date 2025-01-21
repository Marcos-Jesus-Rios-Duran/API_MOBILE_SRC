import teacherDAO from '../dao/teachers.dao.js';
const teacherController = [];
teacherController.getAll = (req, res) => {
  teacherDAO.getAll().then((teachers)=>{
    res.json({
        data: teachers
      });
  })
  .catch((error)=>{
    res.json({
        data:{
            message:error
            
        }
    })
  });
};
export default teacherController;