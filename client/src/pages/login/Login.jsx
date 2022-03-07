import React, { useState, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { loginStart, loginSuccess, loginFailed } from "../../context/Action";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { dispatch, isFetching } = useContext(Context);

  const navigateHandler = () => {
    navigate("/register");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      console.log(username,password);
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailed());
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">ĐĂNG NHẬP</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" disabled={false}>
          Đăng nhập
        </button>
      </form>
      <button className="loginRegisterButton" onClick={navigateHandler}>
        ĐĂNG KÍ
        <i className="fas fa-chevron-circle-right"></i>
      </button>
    </div>
  );
};

export default Login;
