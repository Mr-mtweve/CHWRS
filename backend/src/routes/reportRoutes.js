const express = require('express');
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// All report routes require authentication
router.use(authMiddleware);

// Report CRUD operations
router.get('/', reportController.getAllReports);
router.post('/', reportController.createReport);
router.get('/:id', reportController.getReportById);
router.put('/:id', reportController.updateReport);
router.delete('/:id', reportController.deleteReport);

// Report status operations
router.get('/status/pending', reportController.getPendingReports);
router.get('/status/approved', reportController.getApprovedReports);
router.get('/status/rejected', reportController.getRejectedReports);

// Report approval workflow
router.post('/:id/approve', reportController.approveReport);
router.post('/:id/reject', reportController.rejectReport);
router.post('/:id/comment', reportController.addComment);

// Export reports
router.get('/:id/export/pdf', reportController.exportPDF);
router.get('/:id/export/excel', reportController.exportExcel);

module.exports = router;
