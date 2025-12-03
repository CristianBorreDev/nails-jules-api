require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/admin.model'); // Ajusta la ruta según tu estructura

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB', err));

async function createAdmin() {
  try {
    const exists = await Admin.findOne({ email: 'admin@nailsjules.com' });
    if (exists) {
      console.log('⚠️ Admin ya existe');
      return process.exit(0);
    }

    const admin = new Admin({
      name: 'Admin Nails Jules',
      email: 'admin@nailsjules.com',
      phone: '3007239519',
      password: '123456'
    });

    await admin.save();
    console.log('✅ Admin creado con éxito');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createAdmin();
