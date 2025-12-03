const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/auth.controller');

// Ruta pública de login
router.post('/login', loginAdmin);

module.exports = router;
