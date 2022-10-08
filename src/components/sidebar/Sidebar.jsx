import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="box">
        <a href="#" className="menu">
          Home
        </a>
      </div>
      <div className="box">
        <a href="#" className="menu">
          Services
        </a>
      </div>
      <div className="box">
        <a href="#" className="menu">
          News
        </a>
      </div>
      <div className="box">
        <a href="#" className="menu">
          Blog
        </a>
      </div>
      <div className="box">
        <a href="#" className="menu">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
