import React from "react";
import { INFOR_ITEMS } from "../../data/inforItems";
import "./Infor.css";
import Inforitem from "./inforItems/inforItem.js";

function Inforsection() {
  return (
    <div className="InforSection">
      <div className="InforSection-header absolute-center">
        <span>Create and sell Your NFTs</span>
      </div>
      <div className="InforSection-item-container">
        {INFOR_ITEMS.map((_inforItem) => (
          <Inforitem item={_inforItem} />
        ))}
      </div>
    </div>
  );
}

export default Inforsection;
