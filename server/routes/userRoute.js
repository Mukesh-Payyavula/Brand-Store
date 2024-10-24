const express = require('express');
const { register, login } = require('../controllers/usercontroller');
const router = express.Router();

// Define the routes
router.post('/register', register);
router.post('/login', login);

// Export the router
module.exports = router;  
