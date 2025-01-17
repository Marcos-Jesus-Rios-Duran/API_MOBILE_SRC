import { model, Schema } from 'mongoose';

const studentSchema = new Schema({
  student_id: {
    unique: true,
    required: true, // Corregido: 'require' a 'required'
    type: Number // Corregido: 'number' a 'Number'
  },
  name: {
    type: String, // Agregado tipo String
    required: true //  Agregado requerido
  },
  lastname: {
    type: String, // Agregado tipo String
    required: true // Agregado requerido
  },
  grade: {
    type: Number, // Agregado tipo Number
    required: true //  Agregado requerido
  },
  group: {
    type: String, // Agregado tipo String
    required: true //  Agregado requerido
  },
  average: {
    type: Number, // Agregado tipo Number
    required: true // Agregado requerido
  }
},{
    versionKey:false,
    timestamps:true
});

// Crear modelo

export default model('Student', studentSchema); 

