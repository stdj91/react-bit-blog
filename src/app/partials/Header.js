import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="header">
      <div id="bitBlog">BIT BLOG</div>
      <div id="nav">
        <div>
          <Link to="/">Home</Link>
        </div>
        <span> | </span>
        <div>
          <Link to="/authors">Authors</Link>
        </div>
        <span> | </span>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
