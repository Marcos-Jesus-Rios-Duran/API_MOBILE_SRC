//Clasrooms model
import { model, Schema } from 'mongoose';

const classroomSchema = new Schema({
  classroom_id: {
    unique: true,
    required: true,
    type: Number // Número único para cada aula
  },
  building: {
    type: String, // Edificio donde se encuentra el aula
    required: true
  },
  career: {
    type: String, // Carrera asociada al aula
    required: true
  },
  type: {
    type: String, // Tipo de aula (por ejemplo, laboratorio, salón de clases)
    required: true
  },
  capacity: {
    type: Number, // Capacidad del aula (número de estudiantes que puede albergar)
    required: true
  }
}, {
    versionKey: false,
    timestamps: true
});

// Crear modelo

export default model('Classroom', classroomSchema);
