const express = require('express');
const usersController = require('../controllers/users-controller');
const upload = require('../services/file-upload');
const { check } = require('express-validator');


const router = express.Router();

router.get('/:uid', usersController.getUserById);

router.post('/create', upload.single('image'),
    [
        check('email').isEmail().custom(async value => {
            return usersController.findUserByEmail(value).then(user => {
                if (user) return Promise.reject('Email is already taken.');
            });
        }),
        check('password').isLength({ min: 6, max: 32 }),
        check('username').isLength({ min: 4, max: 32 }).custom(value => {
            return usersController.findUserByUsername(value).then(user => {
                if (user) return Promise.reject('Username is already taken.');
            });
        }),
        check("bio").isLength({ max: 500 })
    ],
    usersController.createUser);

router.patch('/:uid',
    [
        check('password').isLength({ min: 6, max: 32 }),
        check("bio").isLength({ max: 500 })
    ],
    usersController.updateUser);

router.delete('/:uid', usersController.deleteUser);

router.get('/',usersController.getUsersByUsername);

router.post('/login', usersController.login);


module.exports = router;