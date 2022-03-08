import React,{useRef} from "react";
import './checkbox.css';

const Checkbox = (props) => {
  const checkboxRef = useRef();
  const onChangeHandler = () => {
    if(props.onClick) {
        props.onClick(checkboxRef.current);
    }
}
  return (
    <div className="selectCatItem">
      <input
        id={`checkbox${props.index}`}
        type="checkbox"
        ref={checkboxRef}
        onChange={onChangeHandler}
      ></input>
      <label htmlFor={`checkbox${props.index}`}>{props.item.display}</label>
    </div>
  );
};

export default Checkbox;
