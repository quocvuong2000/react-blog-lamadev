import React from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

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