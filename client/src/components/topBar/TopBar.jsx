import React from "react";
import { Link } from "react-router-dom";

import "./topBar.css";

const navItem = [
  {
    display: "HOME",
    link: "/",
  },
  {
    display: "ABOUT",
    link: "/",
  },
  {
    display: "CONTACT",
    link: "/",
  },
  {
    display: "WRITE",
    link: "/write",
  },
];

const TopBar = () => {
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
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
