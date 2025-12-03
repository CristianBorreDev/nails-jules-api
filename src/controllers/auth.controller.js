const Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: 'Credenciales inválidas' });

  const isMatch = await admin.matchPassword(password);
  if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } });
};
