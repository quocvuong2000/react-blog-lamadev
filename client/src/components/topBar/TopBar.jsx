import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./topBar.css";
import { logout } from "../../context/Action";

const navItem = [
  {
    display: "TRANG CHỦ",
    link: "/",
  },
  {
    display: "ABOUT",
    link: "/",
  },
  {
    display: "LIÊN HỆ",
    link: "/",
  },
  {
    display: "VIẾT BLOG",
    link: "/write",
  },
];

const TopBar = () => {
  const { dispatch, user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch(logout());
    window.location.replace("/login");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          {navItem.map((item, index) => {
            return (
              <li className="topListItem" key={index}>
                <Link className="link" to={item.link}>
                  {item.display}
                </Link>
              </li>
            );
          })}
         
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={user.profilePic ? PF + user.profilePic : "https://i.kym-cdn.com/photos/images/original/001/178/392/e88.png"}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                ĐĂNG NHẬP
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                ĐĂNG KÍ
              </Link>
            </li>
          </ul>
        )}
           {user && <div className="logout" onClick={handleLogout}>
           LOGOUT
          </div>
          }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
