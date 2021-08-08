import React from "react";
import { Link } from "@reach/router";

const Video = (props) => {
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
      <div className="video-image">
        <img src={props.thumbnails.url} alt="" />
      </div>
      <div className="video-info">
        <h3>{props.title}</h3>
        <h4>{props.dateAdded}</h4>
        <h4>{props.channel}</h4>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Video;
