import React from "react";
import { Link } from "react-router-dom";

import "./topBar.css";

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
  const user = false;

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
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
