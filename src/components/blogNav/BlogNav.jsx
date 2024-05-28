import React from "react";
import { Link } from "react-router-dom";
import "./blogNav.scss";
const BlogNav = () => {
  return (
    <div>
      <ul className="blog-nav-content">
        <li>
          <Link to="/creatBlog">Create Blog</Link>
        </li>
        <li>
          <Link to="/Signin">Sign In</Link>
        </li>
        <li>
          <Link to="/Signup">Sign Up</Link>
        </li>
        <li>
          <Link to="*">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogNav;
