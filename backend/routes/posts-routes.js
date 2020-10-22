const express = require('express');
const postsController = require('../controllers/posts-controller');
const usersController = require('../controllers/users-controller');
const { check } = require('express-validator');

const router = express.Router();

router.get('/:pid', usersController.getUserById);

router.post('/create', 
[
    check('description').isLength({ max: 255 }),
    check('timestamp').not().isEmpty().isDate(),
    check("user_id").isInt().custom(value => {
        return usersController.findUserById().then(user => {
            if(user) return Promise.reject('Invalid user id.');
        })
    })
    
], 
postsController.createPost);

router.patch('/pid', usersController.updateUser);

router.delete('/:pid', usersController.deleteUser);


module.exports = router;