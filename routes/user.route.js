

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.post('/sign_up', userController.sign_up);
router.post('/sign_in', userController.sign_in);

module.exports = router;