const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.post('/token', auth.generateToken);

module.exports = router;
