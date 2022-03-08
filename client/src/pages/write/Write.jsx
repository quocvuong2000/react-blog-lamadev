import React, { useState, useContext } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import axios from "axios";
import categories from "../../assets/fake-data/categories";
import Checkbox from "../../components/checkbox/Checkbox";
const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cats, setCats] = useState([]);
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    if(cats) {
      newPost.categories = cats;
    }
    try {
      const res = await axios.post("/posts", newPost);
      console.log(res.data);
      window.location.replace("/posts/" + res.data._id);
    } catch (error) {}
  };

  const handleCheckbox = (checked,item)=> {
    if(checked) {
      setCats([...cats,item.link]);
    } else {
      const newCats = cats.filter(cat => cat !== item.link);
      setCats(newCats);
    }
  }
console.log(cats);
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Tiêu đề bài viết"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
        Các danh mục
        </div>
        <div className="selectCats">
          {categories.map((item, index) => {
            return (
              <Checkbox key={index} index={index} item={item} onClick={(input) => handleCheckbox(input.checked,item)}></Checkbox>
            );
          })}
        </div>

        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Nội dung của bạn..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Đăng bài viết
        </button>
      </form>
    </div>
  );
};

export default Write;
