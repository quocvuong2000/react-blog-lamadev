import React from 'react'
import Post from "../post/Post";
import PropTypes from 'prop-types';
import "./posts.css";
const Posts = (props) => {
  const posts = props.posts ? props.posts  : [];
  return (
    <div className="posts">
    {posts.map((item,index)=> {
      return <Post key={index} item={item}></Post>
    })}
  </div>
  )
}

Posts.propTypes = {
  posts : PropTypes.array
}

export default Posts