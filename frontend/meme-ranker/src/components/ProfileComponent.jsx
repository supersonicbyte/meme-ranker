import React from 'react';
import ProfileItem from './ProfileItemComponent';

let imgs = [
    ['https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
    'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
    'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg'],
    ['https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg',
    'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg',
    'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg']
];


function Profile(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                    <img className="profile-image mx-auto" src="https://i.imgflip.com/499uew.jpg" alt="profile image"></img>
                    <br></br>
                    <button type="button" class="btn btn-outline-secondary follow-btn">Follow</button>

                </div>
                <div className="col votes-box">
                    <h3 className="username-text">catto</h3>
                    <ul>
                        <li><b>4</b> posts</li>
                        <li><b>565</b> followers</li>
                        <li><b>542</b> following</li>
                    </ul>
                    <h5 className="bio-heading">Bio</h5>
                    <p>meow meow meow meow meow meow meow meow
                    meow meow meow meow meow meow meow meow
                    meow meow meow meow meow meow meow meow
                    </p>
                </div>
            </div>
            <hr></hr>
            {
                imgs.map((url, index) => {
                    return (<div className="row">
                        <ProfileItem img={imgs[index][0]}></ProfileItem>
                        <ProfileItem img={imgs[index][1]}></ProfileItem>
                        <ProfileItem img={imgs[index][2]}></ProfileItem>
                    </div>);
                })
            }
            </div>
    );
}



export default Profile;