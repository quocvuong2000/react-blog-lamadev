import React,{useState,useEffect} from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';

import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


const navigateHandler = ()=> {
  navigate('/register');
}
  return (
    <div className="login">
    <span className="loginTitle">ĐĂNG NHẬP</span>
    <form className="loginForm">
      <label>Email</label>
      <input className="loginInput" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..." />
      <button className="loginButton">Đăng nhập</button>
    </form>
      <button className="loginRegisterButton" onClick={navigateHandler}>ĐĂNG KÍ 
      <i className="fas fa-chevron-circle-right"></i>
      </button>
     

  </div>
  )
}

export default Login