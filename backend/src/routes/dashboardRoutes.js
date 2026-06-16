const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// All dashboard routes require authentication
router.use(authMiddleware);

// Dashboard summary
router.get('/summary', dashboardController.getDashboardSummary);
router.get('/analytics', dashboardController.getAnalytics);
router.get('/charts', dashboardController.getChartData);
router.get('/reports-summary', dashboardController.getReportsSummary);
router.get('/health-indicators', dashboardController.getHealthIndicators);
router.get('/outbreak-alerts', dashboardController.getOutbreakAlerts);
router.get('/performance-metrics', dashboardController.getPerformanceMetrics);

module.exports = router;
