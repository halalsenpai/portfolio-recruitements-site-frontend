import React from "react";
import { Tag } from "antd";

const CTag = (props) => {
  const { type = "", tagName = "default" } = props;
  return (
    <Tag {...props} className={`custom-tag ${type}`}>
      {tagName}
    </Tag>
  );
};

export default CTag;
