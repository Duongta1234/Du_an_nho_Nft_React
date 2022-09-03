import React from "react";
import "./inforItems.css";
const inforItem = (props) => {
  const { item } = props;
  return (
   <div className="inforItem-container">
     <div className="Infor-Item1 absolute-center">
      <img alt={item.section_title} className="icon" src="item.icon" />
      <div className="infor-Item-title">{item.section_title}</div>
      <div className="infor-Item-description">{item.description}</div>
    </div>
   </div>
  );
};

export default inforItem;
