//DAO
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURL = process.env.MONGO_URI;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error en la conexión a MongoDB:', error);
});
  
db.once('open', () => {
  console.log('Conexión a MongoDB establecida con éxito');
});

export default db;
