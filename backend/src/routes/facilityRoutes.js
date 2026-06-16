const express = require('express');
const facilityController = require('../controllers/facilityController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeMiddleware = require('../middleware/authorizeMiddleware');

const router = express.Router();

// All facility routes require authentication
router.use(authMiddleware);

// Facility management (Admin only)
router.get('/', facilityController.getAllFacilities);
router.post('/', authorizeMiddleware(['admin']), facilityController.createFacility);
router.get('/:id', facilityController.getFacilityById);
router.put('/:id', authorizeMiddleware(['admin']), facilityController.updateFacility);
router.delete('/:id', authorizeMiddleware(['admin']), facilityController.deleteFacility);

// Ward management
router.get('/wards/list', facilityController.getAllWards);
router.post('/wards', authorizeMiddleware(['admin']), facilityController.createWard);
router.put('/wards/:id', authorizeMiddleware(['admin']), facilityController.updateWard);
router.delete('/wards/:id', authorizeMiddleware(['admin']), facilityController.deleteWard);

// Municipality management
router.get('/municipalities/list', facilityController.getAllMunicipalities);
router.post('/municipalities', authorizeMiddleware(['admin']), facilityController.createMunicipality);

module.exports = router;
