import React, { Component } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Post(props) {
        return (<>
            <div className="card mx-auto post">
                <div className="post-title">
                <img className="avatar-image"  src={props.avatar} alt="avatar"></img>
                <p className="post-username"><b>{props.username}</b> posted {props.timestamp} minutes ago</p>
                </div>
                <hr></hr>
                <img src={props.img_url} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <p className="card-text">{props.desc}</p>
                    </div>
                    <div className="post-footer">   
                    <a><FaArrowUp className="fa-arrow"></FaArrowUp></a>
                    <p>{props.upvotes}</p>
                    <a><FaArrowDown className="fa-arrow"></FaArrowDown></a>
                    <p>{props.downvotes}</p>
                    </div>
                    </div>
            
                </>
        );
}
export default Post;