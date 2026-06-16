const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeMiddleware = require('../middleware/authorizeMiddleware');

const router = express.Router();

// All user routes require authentication
router.use(authMiddleware);

// User management (Admin only)
router.get('/', authorizeMiddleware(['admin']), userController.getAllUsers);
router.post('/', authorizeMiddleware(['admin']), userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', authorizeMiddleware(['admin']), userController.deleteUser);

// User profile
router.get('/profile/me', userController.getCurrentUserProfile);
router.put('/profile/me', userController.updateProfile);
router.post('/profile/change-password', userController.changePassword);

// User status
router.post('/:id/activate', authorizeMiddleware(['admin']), userController.activateUser);
router.post('/:id/deactivate', authorizeMiddleware(['admin']), userController.deactivateUser);

module.exports = router;
