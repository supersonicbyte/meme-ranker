class User {
    constructor(username, email, password, bio, profileImgPath){
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.profileImgPath = profileImgPath;
    }
}

module.exports = User;