import React from "react";
import { Link } from "react-router-dom";

const PostPage = ({ post }) => (
  <div lassName="container1">
    <Link to={`/post/${post.id}`}>
      <h3>{post.title}</h3>
    </Link>
    <p>{post.body}</p>
  </div>
);
export default PostPage;
