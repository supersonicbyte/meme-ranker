const db = require('../services/db');
const bcrypt = require('bcrypt');
const HttpError = require('../models/http-error');
const Post = require('../models/post');

// database quieries
const createPostQuery = "INSERT INTO posts (description, img_path, timestamp, user_id) VALUES ($1,$2,$3,$4)";


// CRUD
async function createPost(req, res, next){
    const {user_id, description, img_path, timestamp} = req.body;
    try {
        db.query(createPostQuery,[description, img_path, timestamp, user_id]);
    } catch (error) {
        next(error);
    }
    res.status(200).send();
}


exports.createPost = createPost;