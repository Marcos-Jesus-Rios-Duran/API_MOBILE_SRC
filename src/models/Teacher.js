import { model, Schema } from 'mongoose';

const teacherSchema = new Schema({
  teacher_number: {
    unique: true,
    required: true,
    type: Number // Número único para cada maestro
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  career: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Teacher', teacherSchema);
