import React, { Component } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

class Post extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<>
            <div className="card mx-auto post">
                <div className="post-title">
                <img className="avatar-image"  src={this.props.avatar} alt="avatar"></img>
                <p className="post-username"><b>{this.props.username}</b> posted {this.props.timestamp} minutes ago</p>
                </div>
                <hr></hr>
                <img src={this.props.img_url} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <p className="card-text">{this.props.desc}</p>
                    </div>
                    <div className="post-footer">   
                    <a><FaArrowUp className="fa-arrow"></FaArrowUp></a>
                    <p>{this.props.upvotes}</p>
                    <a><FaArrowDown className="fa-arrow"></FaArrowDown></a>
                    <p>{this.props.downvotes}</p>
                    </div>
                    </div>
            
                </>
        );
    }
}
export default Post;