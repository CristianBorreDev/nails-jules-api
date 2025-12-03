const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/schedule.controller');
const authMiddleware = require('../middlewares/auth');

// CRUD completo de clients
router.get('/', ctrl.getAllSchedules);
router.post('/', authMiddleware, ctrl.createSchedule);
router.put('/:id', authMiddleware, ctrl.updateSchedule);
router.delete('/:id', authMiddleware, ctrl.deleteSchedule);

module.exports = router;
