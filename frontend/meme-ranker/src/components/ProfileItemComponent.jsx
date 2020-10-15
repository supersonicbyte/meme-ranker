import React from 'react';



function ProfileItem(props) {
    return (
        <div className="grid-image">
            <img style={{width: "100%", height: "100%"}} src={props.img} alt="image"></img>
        </div>
    );

}
export default ProfileItem;