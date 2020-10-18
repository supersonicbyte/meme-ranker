const db = require('../services/db');
const bcrypt = require('bcrypt');
const HttpError = require('../models/http-error');
const User = require('../models/user');
const upload = require('../services/file-upload');

// number of rounds for hashing
const saltRounds = 10;
// queries
const insertUserQuery = "INSERT INTO users (username, email, password, profile_img_path, bio) VALUES ($1,$2,$3,$4,$5) RETURNING *";
const getUserByIdQuery = "SELECT username, email, bio, profile_img_path FROM users WHERE user_id=$1";
const getUserByUsername = "SELECT * FROM users WHERE username=$1";
const getUserByEmailQuery = "SELECT * FROM user WHERE email=1$";
const updateUserBioQuery = "UPDATE users SET bio=$1 WHERE user_id=$2";
const updateUserPhotoQuery = "UPDATE users SET profile_img_path=$1 WHERE user_id=$2";
const deleteUserQuery = "DELETE FROM users WHERE user_id=$1";

// CRUD 
async function getUserById(req, res, next) {
    try {
        const uid = req.params.uid;
        const queryResult = await db.query(getUserByIdQuery, [uid]);
        const user = new User(queryResult.rows[0], queryResult.rows[1]);
        res.json(user);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

async function createUser(req, res, next) {
    const { username, email, password, bio } = req.body;
    // if (!validatePassword(password)) {
    //     console.log(password);
    //     const error = new HttpError('invalid password', 500);
    //     next(error);
    // }
    // else if (!validateEmail(email)) {
    //     const error = new HttpError('email already exists', 500);
    //     next(error);s
    // }
    
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.query(insertUserQuery,
            [username,
                email,
                hash,
                req.file ? "localhost:4000/" + res.req.file.filename : "",
                bio],);
    }
    catch (error) {
        console.log(error);
    }
    res.status(200).send();
}

async function updateUserBio(req, res, next) {
    const uid = req.params.uid;
    const { bio } = req.body;
    try {
        if (typeof bio != undefined) {
            await db.query(updateUserBioQuery, [bio, uid]);
        }
        res.status(200);
        res.send();
    }
    catch (err) {
        next(err);
    }

}

async function deleteUser(req, res, next) {
    const uid = req.params.uid;
    try {
        await db.query(deleteUserQuery, [uid]);
    } catch (error) {
        next(error);
    }
    res.status(200).send();
}



// validation functions

function validatePassword(pass) {
    if (pass.lenght >= 6) {
        return true;
    }
    return false;
}

async function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(email)) {
        return false;
    }
    try {
        const result = await db.query(getUserByEmailQuery, [email]);
        if (result.rowCount > 0) return false;
    }
    catch (err) {
        next(err);
    }
    return true;
}

async function validateUsername(username) {
    try {
        const result = await db.query(getUserByUsername, [username]);
        if (result.rowCount > 0) return false;
    }
    catch (err) {
        console.log(err);
    }
    return true;
}

exports.createUser = createUser;
exports.getUserById = getUserById;
exports.updateUserBio = updateUserBio;
exports.deleteUser = deleteUser;