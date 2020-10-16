const db = require('../services/db');
const bcrypt = require('bcrypt');
const HttpError = require('../models/http-error');
const User = require('../models/user');

// number of rounds for hashing
const saltRounds = 10;
// queries
const insertUserQuery = "INSERT INTO users (username, email, password, bio) VALUES ($1,$2,$3,$4) RETURNING *";
const getUserByIdQuery = "SELECT username, email, bio, profile_img_path FROM users WHERE user_id=$1";

async function getUserById(req, res, next) {
    try{
        const uid = req.params.uid;
        const queryResult =  await db.query(getUserByIdQuery, [uid]);
        const user = new User(queryResult.rows[0], queryResult.rows[1]);
        res.json(user);
    }
    catch(error){
        console.log(error);
        next(error);
    }
    

}

async function createUser(req, res, next) {
    const { username, password, email, bio } = req.body;
    if (!validatePassword(password) || !validateEmail(email)){
        const error = new HttpError('invalid username or password', 500);
        next(error);
    }
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.query(insertUserQuery,
            [username, email, password, bio],
            (err, res) => {
                console.log(err, res);
                db.end();

            });
        console.log('jedan');
        res.json(newUser);
    }
    catch (error) {
        console.log(error);
    }

}


function validatePassword(pass) {
    if (pass.lenght >= 6) {
        return true;
    }
    return false;
}

function validateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return true;
    }
    return false;
}

exports.createUser = createUser;
exports.getUserById = getUserById;