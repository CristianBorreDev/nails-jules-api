const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/clients.controller');
const authMiddleware = require('../middlewares/auth');

// CRUD completo de clients
router.get('/', authMiddleware, ctrl.getAllClients);
router.get('/:id', authMiddleware, ctrl.getClientById);
router.post('/', authMiddleware, ctrl.createClient);
router.put('/:id', authMiddleware, ctrl.updateClient);
router.delete('/:id', authMiddleware, ctrl.deleteClient);

module.exports = router;
