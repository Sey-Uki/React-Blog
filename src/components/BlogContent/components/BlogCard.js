import { Component } from "react";
import "./BlogCard.css";

export const BlogCard = ({
  title,
  description,
  likeCount,
  likePost
}) => {
    return (
      <div className="post">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="likeBlock">
          <div>
            <button className="likeBtn" onClick={likePost}>Like</button>
          </div>
          <div className="likeCount">{likeCount}</div>
        </div>
      </div>
    );
};
