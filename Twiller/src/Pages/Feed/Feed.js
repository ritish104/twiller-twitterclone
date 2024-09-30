import React, { useEffect, useState } from "react";
import "./Feed.css";
import Posts from "./Posts/Posts";
import Tweetbox from "./Tweetbox/Tweetbox";

const Feed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []); // Empty array to run effect only once on component mount
console.log(post);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {post.map((p) => (
        <Posts key={p._id} p={p} />
      ))}
    </div>
  );
};

export default Feed;
