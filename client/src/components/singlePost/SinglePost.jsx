import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { Context } from "../../context/Context";
const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updatedMode, setUpdatedMode] = useState(false);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("/posts/" + postId);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const handleDelete = async ()=> {
    await axios.delete("/posts/" + postId , {data : {
      username : user.username,
      title,
      desc
    }})
    window.location.replace(`/?user=${post.username}`);
  }
  const handleUpdate = async ()=> {
    await axios.put("/posts/" + postId , {
      username : user.username,
      title,
      desc
    });
    setUpdatedMode(false);
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={PF + post.photo} alt="" />
        {updatedMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}

            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdatedMode(true)}
                ></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={()=> handleDelete()}></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Tác giả:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updatedMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updatedMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Cập nhật bài viết
          </button>
        )}

      </div>

    </div>
  );
};

export default SinglePost;
