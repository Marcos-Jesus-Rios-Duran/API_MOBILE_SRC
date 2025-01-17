const studentsController = [];

studentsController.getAll = (req, res) => {
  // Aquí voy a pedir al DAO los datos de los estudiantes 
  res.json({
    data: "Aquí voy a enviar los datos de los estudiantes, aguanta las carnitas"
  });
};

export default studentsController;
