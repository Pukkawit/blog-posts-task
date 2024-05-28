import React from "react";
import BlogNav from "../blogNav/BlogNav";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "../createBlog/CreateBlog";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <BlogNav />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
      <div style={{ margin: "20px 40px" }}>
        <h1>Blog Page</h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} style={{ marginLeft: "20px" }}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>{blog.content.substring(0, 100)}...</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blog;
