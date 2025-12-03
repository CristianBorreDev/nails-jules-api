const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/services.controller');
const authMiddleware = require('../middlewares/auth');

// CRUD completo de services
router.get('/', ctrl.getAllServices);
router.get('/:id', authMiddleware, ctrl.getServiceById);
router.post('/', authMiddleware, ctrl.createService);
router.put('/:id', authMiddleware, ctrl.updateService);
router.delete('/:id', authMiddleware, ctrl.deleteService);

module.exports = router;
