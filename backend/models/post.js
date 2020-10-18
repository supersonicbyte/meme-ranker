class Post {
    constructor(post_id, description, img_path, timestamp, user_id){
        this.post_id = post_id;
        this.description = description;
        this.img_path = img_path;
        this.timestamp = timestamp;
        this.user_id = user_id;
    }
}

module.exports = Post;