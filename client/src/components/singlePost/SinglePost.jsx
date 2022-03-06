import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          "http://localhost:5000/api/posts/" + postId
        );
        setPost(res.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [postId]);
  console.log(post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.photo} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Tác giả:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Vuongsempoi">
                {post.username}
              </Link>
            </b>
          </span>
          <span>1 ngày trước</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
