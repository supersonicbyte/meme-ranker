const express = require('express');
const usersController = require('../controllers/users-controller');
const upload = require('../services/file-upload');

const router = express.Router();

router.get('/:uid', usersController.getUserById);
router.post('/create', upload.single('image'), usersController.createUser);
router.patch('/:uid', usersController.updateUserBio);
router.delete('/:uid', usersController.deleteUser);


module.exports = router;