import React, { useState, useContext, useEffect } from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import { UpdateStart, UpdateSuccess, UpdateFailure } from "../../context/Action";
import axios from "axios";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";

  useEffect(()=> {
setPassword(user.password);
setUsername(user.username);
setEmail(user.email);
  },[user])
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(UpdateStart());
    const updateUser = {
      userId: user._id,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put("/user/" + user._id, updateUser);
      setSuccess(true);
      dispatch(UpdateSuccess(res.data));
    } catch (error) {
      dispatch(UpdateFailure());
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Cập nhật tài khoản</span>
          <span className="settingsTitleDelete">Xóa tài khoản</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Ảnh cá nhân</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : user.profilePic ? PF+user.profilePic : "https://i.kym-cdn.com/photos/images/original/001/178/392/e88.png"}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Tài khoản</label>
          <input type="text" placeholder={username} name="name" disabled={true} />
          <label>Email</label>
          <input
            type="email"
            placeholder={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="mật khẩu"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Cập nhật
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
