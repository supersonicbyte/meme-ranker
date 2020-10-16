const express = require('express');
const usersController = require('../controllers/users-controller');

const router = express.Router();

router.get('/:uid', usersController.getUserById);
router.post('/create', usersController.createUser);


module.exports = router;