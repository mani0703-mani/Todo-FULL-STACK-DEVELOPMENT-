const express = require('express');
const router = express.Router();
const {
  sendOTP,
  register,
  login
} = require('../controllers/authControllers');

router.post('/send-otp', sendOTP);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
