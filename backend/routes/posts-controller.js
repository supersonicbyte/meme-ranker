const express = require('express');
const usersController = require('../controllers/users-controller');

const router = express.Router();

router.get('/:pid', usersController.getUserById);
router.post('/create', usersController.createUser);
router.patch('/pid', usersController.updateUserBio);
router.delete('/:pid', usersController.deleteUser);


module.exports = router;