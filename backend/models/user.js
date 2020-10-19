class User {
    constructor(username, email, password, bio, imgPath){
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.imgPath = imgPath;
    }
}

module.exports = User;