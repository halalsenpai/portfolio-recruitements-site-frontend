import React from "react";

import { Button as AntdButton } from "antd";

function Button(props) {
  const { children, type = "small", themeColor = "", className = "", loading } = props;
  return (
    <AntdButton
      loading={loading}
      {...props}
      className={`c-button ${type === "large" ? "large" : ""} ${themeColor} ${className}`}>
      {children}
    </AntdButton>
  );
}

export default Button;
