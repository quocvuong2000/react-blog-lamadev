import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
import PropTypes from "prop-types"; // ES6
const PF = "http://localhost:5000/images/";
const Post = (props) => {
  const item = props.item;
  return (
    <div className="post">
      <img className="postImg" src={PF + item.photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {item.categories.map((item, index) => {
            return (
              <span className="postCat" key={index}>
                <Link className="link" to="">
                  {item}
                </Link>
              </span>
            );
          })}
        </div>
        <span className="postTitle">
          <Link to={`/posts/${item._id}`} className="link">
            {item.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(item.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{item.desc}</p>
    </div>
  );
};

Post.propTypes = {
  item: PropTypes.object,
};

export default Post;
