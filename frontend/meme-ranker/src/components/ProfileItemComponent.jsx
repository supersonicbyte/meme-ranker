import React from 'react';



function ProfileItem(props) {
    return (
        <div className="col-md-4 cl-sm-12">
            <div className="profile-item mx-auto">
                <img className="profile-item-img" src={props.img} alt="image"></img>
            </div>
        </div>

    );

}
export default ProfileItem;