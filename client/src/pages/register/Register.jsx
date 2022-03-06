import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmitSuccess = ()=> {
    setRedirect(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && handleSubmitSuccess();
    } catch (err) {
      setError(true);
    }
  };
   
  return (
    <div className="register">
      {redirect && <span style={{color:"blue", marginTop:"10px"}}>Đăng ký thành công</span>}
      <span className="registerTitle">ĐĂNG KÍ</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Đăng kí
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          ĐĂNG NHẬP
          <i className="fas fa-chevron-circle-right"></i>
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Bạn chưa điền đầy đủ thông tin</span>}
    </div>
  )
}

export default Register