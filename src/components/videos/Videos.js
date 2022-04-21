import React from "react";
import "./_videos.scss";

import { AiFillEye } from "react-icons/ai"

const Videos = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src = "" alt = ""/>
                <span>5:50</span>
            </div>
            <div className="video__title">
                Create app 
            </div>
            <div className="video__details">
            <span>
                    <AiFillEye/> 5m Views

                </span>
                <span>10 days Ago</span>
            </div>
            <div className="video__channel">
                <img src = "" alt />
                <p>ABC</p>
            </div>
        </div>
    )
};

export default Videos;