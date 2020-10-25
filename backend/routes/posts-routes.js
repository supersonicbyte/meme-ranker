const express = require('express');
const postsController = require('../controllers/posts-controller');
const usersController = require('../controllers/users-controller');
const { check } = require('express-validator');
const upload = require('../services/file-upload');


const router = express.Router();

router.get('/:pid', postsController.getPostById);

router.post('/create', 
upload.single('image'),
[
    check('description').isLength({ max: 255 }),
    check('timestamp').trim().isISO8601(),
    check("user_id").isInt().custom(value => {
        return usersController.findUserById(value).then(user => {
            if(!user) return Promise.reject('Invalid user id.');
        })
    })
    
], 
postsController.createPost);

router.patch('/:pid', 
upload.single('image'),
[
    check('description').isLength({ max: 255 }),

],
postsController.updatePost
);

router.delete('/:pid', postsController.deletePost);


module.exports = router;