import React,{useState,useEffect} from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

import axios from 'axios';
import { useLocation } from "react-router-dom";

import "./home.css";

const Home = () => {

  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(()=> {
    try {
      axios.get(`posts${search}`).then(res => {
        setPosts(res.data);
      }).catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  },[search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
