import { render } from "@testing-library/react";
import React, { Component } from 'react';
import Post from "./PostComponent";
let posts = [
    {
        "username": "catto",
        "avatar": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
        "img_url": "https://i.imgflip.com/499uew.jpg",
        "upvotes": 720,
        "downvotes": 2,
        "desc": "Cat meme :)",
        "timestamp": new Date('October 12, 2020 00:39:00')
    },
    {
        "username": "prljavaMetalika",
        "avatar": "https://i.pinimg.com/originals/43/66/1d/43661dd72a8a4a99ec7fe84fb907efff.jpg",
        "img_url": "https://i.pinimg.com/originals/d9/95/25/d995258babbf38cc3340ab81526c5229.jpg",
        "upvotes": 666,
        "downvotes": 2,
        "desc": "Metalika",
        "timestamp": new Date('October 12, 2020 00:22:00')
    }
];

function Home(props){
        return(
            <div>
                {
                    posts.map(element => {
                        return (<Post username={element.username} avatar={element.avatar} img_url={element.img_url} upvotes={element.upvotes} downvotes={element.downvotes} desc={element.desc} timestamp={Math.floor(Math.abs(Date.now() - element.timestamp) / 60000)}></Post>);
                    })
                }
                
                
            </div>
        );
}
export default Home;