import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let reDirect = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ margin: "40px" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={() => reDirect("/blog")}>Back</button>
    </div>
  );
}

export default BlogDetails;
