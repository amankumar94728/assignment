const express = require('express');
const userController = require('../controllers/userController');
const validator = require('../middleware/validator');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/user', auth, validator.validateUser, userController.createUser);

// Define other routes similarly

module.exports = router;
