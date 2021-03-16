import React from "react";
import { Checkbox } from "antd";
import CTag from "./Ctag";
import { AiOutlineDown } from "react-icons/ai";

const CTaskItem = (props) => {
  const { type = "complete" } = props;
  return (
    <div className="w-100 task-list">
      <div className="task-div">
        <div className="d-flex">
          <Checkbox />

          <p className="task-description">
            {String(
              "random task description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis rerum"
            ).slice(0, 40)}
            ...
          </p>
        </div>

        <AiOutlineDown className="expand-icon" />

        <CTag type={type} />
      </div>
    </div>
  );
};

export default CTaskItem;
