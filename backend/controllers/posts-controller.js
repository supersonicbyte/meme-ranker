const db = require('../services/db');
const bcrypt = require('bcrypt');
const HttpError = require('../models/http-error');
const Post = require('../models/post');
const usersController = require('./users-controller');
const { body, validationResult } = require('express-validator');


// Prepared statements
const createPostQuery = "INSERT INTO posts (description, img_path, timestamp, user_id) VALUES ($1,$2,$3,$4)";
const getPostByIdQuery = "SELECT * FROM posts WHERE post_id=$1";
const deletePostQuery = "DELETE FROM posts WHERE post_id=$1";
const updatePostQuery = "UPDATE posts SET description=$1 WHERE post_id=$2";

// CRUD
async function createPost(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { user_id, description, timestamp } = req.body;
    const userExists = await usersController.findUserById(user_id);
    if (!userExists) {
        return res.status(400).json('Invalid user id');
    }
    try {
        db.query(createPostQuery,
            [description,
                req.file ? req.hostname + ':4000' + '/' + res.req.file.filename : "",
                timestamp,
                user_id]);
    } catch (error) {
        next(error);
    }
    res.status(200).send();
}

async function getPostById(req, res, next) {
    const id = req.params.pid;
    try {
        const queryResult = await db.query(getPostByIdQuery, [id]);
        if (queryResult.rowCount === 0) return res.status(400).json('Invalid post id');
        const post = new Post(queryResult[0].post_id, queryResult[0].description, queryResult[0].img_path, queryResult[0].timestamp, queryResult[0].user_id);
        return res.status(200).json(post);
    } catch (error) {
        console.log(error);
        return res.status(400).json('Unexpected db error');
    }
}

async function deletePost(req, res, next) {
    const id = req.params.pid;
    try {
        const queryResult = await db.query(deletePostQuery, [id]);
        return res.status(200).json('Post successfuly deleted.');
    } catch (error) {
        console.log(error);
        return res.status(500).json('Error deleting post');
    }
}

async function updatePost(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const pid = req.params.pid;
    const description = req.body.description;
    try {
        await db.query(updatePostQuery,[description,pid])
    } catch (error) {
        console.log(error);
        return res.status(500).json('error updating post');
    }
    return res.status(200).json('post succesfully updated');

}

exports.createPost = createPost;
exports.getPostById = getPostById;
exports.deletePost = deletePost;
exports.updatePost = updatePost;