import React from "react";
import { Link } from "react-router-dom";
const Error_URL = () => {
  return (
    <div>
      <h3
        style={{
          letterSpacing: "unset",
          textTransform: "none",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Oops! Looks like you mistyped the url. Click this instead{" "}
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
};

export default Error_URL;
