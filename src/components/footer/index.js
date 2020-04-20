import React from "react";
import "./index.scss";
var currentYear = new Date().getFullYear();
const index = () => {
  return (
    <div className="footer">
      <p>Copyright@ 2012-{currentYear} 我们影像 All Rights Reserved</p>
    </div>
  );
};
export default index;
