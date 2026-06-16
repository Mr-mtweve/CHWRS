const express = require('express');
const chwController = require('../controllers/chwController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeMiddleware = require('../middleware/authorizeMiddleware');

const router = express.Router();

// All CHW routes require authentication
router.use(authMiddleware);

// CHW management (Admin and Supervisor)
router.get('/', authorizeMiddleware(['admin', 'supervisor']), chwController.getAllCHWs);
router.post('/', authorizeMiddleware(['admin']), chwController.createCHW);
router.get('/:id', chwController.getCHWById);
router.put('/:id', authorizeMiddleware(['admin']), chwController.updateCHW);
router.delete('/:id', authorizeMiddleware(['admin']), chwController.deleteCHW);

// CHW assignment
router.post('/:id/assign-ward', authorizeMiddleware(['admin']), chwController.assignWard);
router.post('/:id/assign-facility', authorizeMiddleware(['admin']), chwController.assignFacility);

// CHW activity
router.get('/:id/reports', chwController.getCHWReports);
router.get('/:id/activity', authorizeMiddleware(['admin', 'supervisor']), chwController.getCHWActivity);

module.exports = router;
