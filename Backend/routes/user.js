const express   = require('express')
const router    = express.Router()
const authMiddleware = require('../middleware/authMiddleware');
const { registerUser, loginUser, logoutUser } = require('../controllers/userControllers');
// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authMiddleware, logoutUser);

module.exports = router;