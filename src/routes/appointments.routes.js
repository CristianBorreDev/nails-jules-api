const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/appointments.controller");
const authMiddleware = require('../middlewares/auth');

// CRUD completo de appointments
router.get('/', authMiddleware, ctrl.getAllAppointments);
router.get('/:id', authMiddleware, ctrl.getAppointmentById);
router.post('/', authMiddleware, ctrl.createAppointment);
router.put('/:id', authMiddleware, ctrl.updateAppointment);
router.delete('/:id', authMiddleware, ctrl.deleteAppointment);

// Endpoint especial para landing page: crea cliente si no existe + cita
router.post('/landing', ctrl.createAppointmentWithClient);

module.exports = router;
