import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import cats from '../../assets/fake-data/categories';
const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">VỀ CHÚNG TÔI</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Nhóm mình là nhóm Quỷ Đá chuyên chơi đá "QUÝ", nhằm phục phụ
          những bạn có những blog hay, những bài viết chia sẻ về cuộc sống hay
          những mẹo vặt trong sinh hoạt hằng ngày thì đây là nơi cho bạn chia sẻ
          những việc ấy. Chào mừng bạn đến với BLOG QUỶ ĐÁ
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">DANH MỤC</span>
        <ul className="sidebarList">
          {cats?.map((c, index) => (
            <Link to={`/?cat=${c.link}`} className="link" key={index}>
              <li className="sidebarListItem">{c.display}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
